import Link from "next/link";

export function ButtonPrimary({ classname }: { classname?: string }) {
  return (
    <Link href={"/checkout"} className={`text-center block min-w-full rounded-md py-1 font-semibold border-custom-accentColor border hover-effect hover-bg-accent ${classname}`}>
      BUY NOW
    </Link>
  );
}
