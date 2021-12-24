interface InlineCodeProps {
  children: string;
}

export default ({ children }: InlineCodeProps) => (
  <span class="font-mono ">{children}</span>
);
