import { trans } from "@/app/libs/i18n.lib";

export function ButtonPrimary({ classname, type, content, onclick }: { classname?: string; type: "button" | "submit"; content: string; onclick?: () => void}) {
  return (
    <button type={type} className={`text-center block w-full rounded-md py-2 font-semibold border-custom-accentColor border hover-effect hover-bg-accent ${classname}`}>
      {trans.t(content)}
    </button>
  );
}
