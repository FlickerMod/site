import type { Component } from "solid-js";

import logo from "../assets/logo.svg";

const Header: Component = () => (
  <nav class="w-full py-3 px-40 h-15 shadow-md flex justify-between items-center">
    <img src={logo} alt="Flicker" class="self-stretch" />
    <a href="https://github.com/FlickerMod" target="_blank">Github</a>
  </nav>
);

export default Header;
