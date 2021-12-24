import type { Component } from "solid-js";
import { render } from "solid-js/web";

import "virtual:windi.css";
import Code from "./components/Code";
import CodeSection from "./components/CodeSection";
import Header from "./components/Header";
import Hero from "./components/Hero";

import moduleSample from "./codeSamples/module.txt";
import InlineCode from "./components/InlineCode";

const App: Component = () => {
  return (
    <>
      <Header />
      <Hero />
      <div class="p-5">
        {/* <<<<<<< HEAD */}
        <CodeSection code={moduleSample} header="Innovative module system">
          Modules keep code neatly separated, and you can depend on other
          modules to set a sensible load order, so modules can depend on other
          modules' side effects. You can also depend on the built-in{" "}
          <InlineCode>dom.ready</InlineCode> module to ensure Discord is
          initialised before starting to run your code.
        </CodeSection>
        {/* =======
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
>>>>>>> f716c90cdd0102f8f2f60af389762e84e3e0199c */}
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
