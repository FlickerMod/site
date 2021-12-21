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
        <p>content, code samples, etc goes here</p>

        <Code>export default test{"\n"}
        test</Code>
      </div>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
