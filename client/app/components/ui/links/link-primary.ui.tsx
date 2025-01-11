import Link from "next/link";

export function LinkPrimary({ classname, href, content }: { classname?: string; href: string; content: string }) {
  return (
    <Link href={href} className={`text-center block min-w-full rounded-md py-1 font-semibold border-custom-accentColor border hover-effect hover-bg-accent ${classname}`}>
      {content}
    </Link>
  );
}
