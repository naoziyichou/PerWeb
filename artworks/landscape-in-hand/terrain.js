/* Shared mutable height field: contours, water, picking and rivers all sample this data. */
(function (root) {
  'use strict';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  class ClayTerrain {
    constructor(size, cell, heightScale, noise) {
      this.size = size;
      this.cell = cell;
      this.heightScale = heightScale;
      this.extent = (size - 1) * cell / 2;
      this.heights = new Float32Array(size * size);
      this.history = [];
      this.stroke = null;
      this.revision = 0;
      this.interventions = 0;
      let max = 0;
      for (let z = 0; z < size; z++) for (let x = 0; x < size; x++) {
        const nx = x / (size - 1) * 2 - 1, nz = z / (size - 1) * 2 - 1;
        const falloff = clamp(1 - Math.pow(Math.hypot(nx, nz) * 1.02, 2.2), 0, 1);
        const n = (noise(x * .035, z * .035) * .6 + noise(x * .1015, z * .1015) * .3 + noise(x * .2135, z * .2135) * .1) * falloff;
        this.heights[z * size + x] = n;
        max = Math.max(max, n);
      }
      for (let i = 0; i < this.heights.length; i++) this.heights[i] = this.heights[i] / max * .95;
      this.original = this.heights.slice();
    }
    sample(gx, gz) {
      const x = clamp(gx, 0, this.size - 1.00001), z = clamp(gz, 0, this.size - 1.00001);
      const x0 = Math.floor(x), z0 = Math.floor(z), fx = x - x0, fz = z - z0, i = z0 * this.size + x0;
      const a = this.heights[i] * (1 - fx) + this.heights[i + 1] * fx;
      const b = this.heights[i + this.size] * (1 - fx) + this.heights[i + this.size + 1] * fx;
      return a * (1 - fz) + b * fz;
    }
    sampleWorld(x, z) { return this.sample((x + this.extent) / this.cell, (z + this.extent) / this.cell); }
    beginStroke(gx, gz, radius) {
      if (this.stroke || gx < 0 || gz < 0 || gx > this.size - 1 || gz > this.size - 1) return false;
      const weights = [];
      for (let z = Math.max(0, Math.floor(gz - radius)); z <= Math.min(this.size - 1, Math.ceil(gz + radius)); z++) {
        for (let x = Math.max(0, Math.floor(gx - radius)); x <= Math.min(this.size - 1, Math.ceil(gx + radius)); x++) {
          const d = Math.hypot(x - gx, z - gz) / radius;
          if (d < 1) weights.push([z * this.size + x, Math.pow(1 - d * d, 3)]);
        }
      }
      this.stroke = { before: this.heights.slice(), weights, changed: false, gx, gz, radius, offset: 0 };
      return true;
    }
    updateStroke(offset) {
      if (!this.stroke || !Number.isFinite(offset)) return false;
      const s = this.stroke;
      offset = clamp(offset, -1.2, 1.2);
      if (Math.abs(offset - s.offset) < .0002) return false;
      s.offset = offset;
      s.changed = Math.abs(offset) > .002;
      for (const [i, weight] of s.weights) this.heights[i] = clamp(s.before[i] + offset * weight, -.14, 1.5);
      this.revision++;
      return true;
    }
    remember(heights, interventions) {
      this.history.push({ heights, interventions });
      if (this.history.length > 24) this.history.shift();
    }
    endStroke() {
      if (!this.stroke) return false;
      const s = this.stroke;
      this.stroke = null;
      if (s.changed) {
        this.remember(s.before, this.interventions);
        this.interventions++;
      } else {
        this.heights.set(s.before);
        this.revision++;
      }
      return s.changed;
    }
    undo() {
      this.endStroke();
      const previous = this.history.pop();
      if (!previous) return false;
      this.heights.set(previous.heights);
      this.interventions = previous.interventions;
      this.revision++;
      return true;
    }
    reset() {
      this.endStroke();
      if (!this.heights.some((h, i) => Math.abs(h - this.original[i]) > .00001)) return false;
      this.remember(this.heights.slice(), this.interventions);
      this.heights.set(this.original);
      this.interventions = 0;
      this.revision++;
      return true;
    }
    // A flow step may descend or stop in a basin; it never walks uphill.
    downhill(gx, gz, distance) {
      let best = this.sample(gx, gz), bx = gx, bz = gz;
      for (let i = 0; i < 16; i++) {
        const a = i * Math.PI / 8;
        const x = clamp(gx + Math.cos(a) * distance, .1, this.size - 1.1);
        const z = clamp(gz + Math.sin(a) * distance, .1, this.size - 1.1);
        const h = this.sample(x, z);
        if (h < best - .00001) { best = h; bx = x; bz = z; }
      }
      return { x: bx, z: bz, height: best, stopped: bx === gx && bz === gz };
    }
  }
  root.ClayTerrain = ClayTerrain;
  if (typeof module !== 'undefined') module.exports = { ClayTerrain };
})(typeof window !== 'undefined' ? window : globalThis);
