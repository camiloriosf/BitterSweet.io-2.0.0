import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LngDetector from 'i18next-browser-languagedetector';

const startI18n = () => i18n.use(LngDetector).use(XHR).init({
  fallbackLng: 'en',
  detection: {
    order: ['navigator', 'htmlTag'],
  },
  loadPath: '/static/locales/{{lng}}/{{ns}}.json',
  addPath: '/static/locales/add/{{lng}}/{{ns}}',
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  saveMissing: true,
});

export default startI18n;
