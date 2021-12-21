import Prism from "prismjs";
import { createEffect } from "solid-js";

interface CodeProps {
  lang?: string;
  children: string;
}

function getRandom(): string {
  // @ts-expect-error 2339
  return crypto.randomUUID?.() ?? (Math.random() * 5000000).toFixed();
}

const Code = ({ lang, children }: CodeProps) => {
  const uuid = getRandom();

  createEffect(() => {
    const elem = document.getElementById(`code-${uuid}`);
    if (elem != null) Prism.highlightElement(elem);
  });

  return (
    <pre>
      <code class={`language-${lang ?? "js"}`} id={`code-${uuid}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
