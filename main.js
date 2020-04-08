// import { neverland as $, render, html, useState } from 'https://unpkg.com/neverland?module'
import { render, html } from "https://unpkg.com/neverland?module";

const $app = document.createElement("div");

document.body.appendChild($app);

render(
  $app,
  html`<h1>Hi</h1>
    <h2>There there</h2>`
);
