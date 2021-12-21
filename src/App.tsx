import type { Component } from "solid-js";
import { render } from "solid-js/web";

import "virtual:windi.css";
import Code from "./components/Code";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App: Component = () => {
  return (
    <>
      <Header />
      <Hero />
      <div class="p-5">
        <p>Writing modules is easier than ever!</p>

        <Code>{`flicker.module("myModule")
  .defines(() => {
    console.log("Hi!");
  });`}</Code>

        <p>Want another module's to be available before yours runs?</p>
        <Code>{`flicker.module("myModule")
  .requires("someOtherModule")
  .defines(() => {
    // someOtherModule's code is now available!
  });`}</Code>

        <p>Want to extend or customize Flicker?</p>
        <Code>{`flicker.module("myModule")
  .defines(() => {
    flicker.Logger.inject({
      // You can now change or add methods to the Logger class!
    })
  })`}</Code>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
