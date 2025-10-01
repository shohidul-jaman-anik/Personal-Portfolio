import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import chTranslate from '../src/Components/locals/Chines/translate.json'
import enTranslate from '../src/Components/locals/Eng/translate.json'
import bdTranslate from '../src/Components/locals/Bd/translate.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslate,

            },
            ch: {
                translation: chTranslate,

            },
            bd:{
                translation: bdTranslate,
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n