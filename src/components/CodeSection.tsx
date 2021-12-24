import { JSXElement } from "solid-js";
import Code from "./Code";

interface CodeSectionProps {
  code: string;
  header: JSXElement;
  children: JSXElement;
}
export default ({ code, header, children }: CodeSectionProps) => (
  <div class="grid px-10 py-5 grid-rows-1 grid-cols-2 gap-5 min-h-50">
    <Code>{code}</Code>
    <div class="text-center flex flex-col justify-center px-15">
      <h2 class="text-2xl mb-3">{header}</h2>
      <div>{children}</div>
    </div>
  </div>
);
