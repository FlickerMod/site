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
        <CodeSection code={moduleSample} header="Innovative module system">
          Modules keep code neatly separated, and you can depend on other
          modules to set a sensible load order, so modules can depend on other
          modules' side effects. You can also depend on the built-in{" "}
          <InlineCode>dom.ready</InlineCode> module to ensure Discord is
          initialised before starting to run your code.
        </CodeSection>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
