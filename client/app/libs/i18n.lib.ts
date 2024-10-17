import i18n from "i18next";
import LanguageDetectorModule from "i18next-browser-languagedetector";
import { messages } from "@/app/lang/lang";

i18n.use(LanguageDetectorModule).init({
  debug: false,
  defaultNS: "translations",
  lng: "en",
  ns: ["translations"],
  resources: messages,
});

export { i18n as trans };
