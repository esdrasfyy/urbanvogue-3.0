import { trans } from "@/app/libs/i18n.lib";

export function ButtonSecondary({ classname, type, content, onclick }: { classname?: string; type: "button" | "submit"; content: string; onclick?: () => void }) {
  return (
    <button onClick={onclick} type={type} className={`text-center block w-full rounded-md py-2 font-semibold border-custom-tertiaryBrand border hover-effect hover-bg-tertiaryBrand ${classname}`}>
      {trans.t(content)}
    </button>
  );
}
