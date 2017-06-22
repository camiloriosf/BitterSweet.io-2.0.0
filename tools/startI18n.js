import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

const startI18n = (file, lang) => i18n.use(LngDetector).init({
  lng: lang,
  fallbackLng: 'en',
  resources: file,
  detection: {
    order: ['navigator', 'htmlTag'],
  },
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
});

export default startI18n;
