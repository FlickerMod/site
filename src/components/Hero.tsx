import type { Component } from "solid-js";

import bg from "../assets/bg.png";
import logoBg from "../assets/logo_bg.png";
import logo from "../assets/logo.svg";

const Hero: Component = () => (
  <div class="grid">
    {/* bg */}
    <div
      style={{ "background-image": `url(${bg})` }}
      class="h-80 <md:h-100 bg-cover bg-center row-start-1 col-start-1 opacity-50"
    />
    {/* fg */}
    <div class="h-80 <md:h-100 flex items-center px-20 py-10 row-start-1 col-start-1 z-1 <md:flex-col">
      <img src={logoBg} class="h-50 shadow-2xl" />

      <div class="flex-1 md:ml-30 <md:mt-10 text-center">
        <h1 class="text-4xl">Flicker</h1>
        <p class="mt-4">
          A new kind of Discord modification, built around modules.
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
