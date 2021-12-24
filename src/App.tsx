import type { Component } from "solid-js";
import { render } from "solid-js/web";

import "virtual:windi.css";
import CodeSection from "./components/CodeSection";
import InlineCode from "./components/InlineCode";
import Header from "./components/Header";
import Hero from "./components/Hero";

// @ts-expect-error
import simpleSample from "./codeSamples/simple.txt";
// @ts-expect-error
import dependSample from "./codeSamples/depend.txt";
// @ts-expect-error
import extendSample from "./codeSamples/extend.txt";

const App: Component = () => {
  return (
    <>
      <Header />
      <Hero />
      <div class="p-5">
        <CodeSection code={simpleSample} header="Innovative module system">
          Modules keep code neatly separated, and helps code to stay independent
          and clean, and with a super simple API, writing modules is super easy!
        </CodeSection>
        <CodeSection
          code={dependSample}
          header="Dependencies without the hassle"
        >
          Modules can depend on others to help setup a sensible load order, so
          you can depend on other modules' side effects. You can also depend on
          the built-in <InlineCode>dom.ready</InlineCode> module to ensure
          Discord is initialized before starting to run your code.
        </CodeSection>
        <CodeSection
          code={extendSample}
          header="Extend away, without janky patching"
        >
          Flicker allows you to extend it from within a module, as well as
          extending other modules too, so you can export globals without having
          to deal with attaching to window and cleaning up after yourself. And
          it's all done through a simple API.
        </CodeSection>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
