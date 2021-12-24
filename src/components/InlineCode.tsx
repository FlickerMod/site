interface InlineCodeProps {
  children: string;
}

export default ({ children }: InlineCodeProps) => (
  <span class="font-mono bg-[#282c34] text-[#abb2bf] px-1 py-0.5 rounded">
    {children}
  </span>
);
