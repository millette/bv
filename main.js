import {
  neverland as $,
  render,
  svg,
  html,
  useState,
} from "https://unpkg.com/neverland@3.4.0/esm/index.js?module";

const $app = document.createElement("div");

document.body.appendChild($app);

const arr2 = [...Array(10)];
const arr = [...Array(10)];

const w0 = 2000;
const h0 = 1000;

const p = 20;
const w1 = (w0 - p) / arr.length - p;
const h1 = (h0 - p) / arr2.length - p;

const s = svg`<svg viewbox="0 0 2000 1000">
${arr2.map((g, n2) =>
  arr.map(
    (g, n) => svg`<rect x=${n * (p + w1)} y=${n2 * (p + h1)} rx=${
      p / 3
    } width=${w1} height=${h1} />
    <text x=${w1 / 2 + n * (p + w1)} y=${h1 / 2 + n2 * (p + h1)}>${
      2000 + n + n2 * arr.length
    }</text>`
  )
)}
</svg>`;

render($app, s);
