import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationSL from './locales/sl/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  sl: {
    translation: translationSL
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    resources: {
      sl: { translation: translationSL },
      en: { translation: translationEN },
    },
    lng: "sl",
    fallbackLng: 'sl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

  });

export default i18n;