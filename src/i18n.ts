import i18n, { Resource } from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next/initReactI18next";
import enLang from "../public/locales/en.json";
import ruLang from "../public/locales/ru.json";

const resources: Resource = {
    en: {
        translation: enLang
    },
    ru: {
        translation: ruLang
    }
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;