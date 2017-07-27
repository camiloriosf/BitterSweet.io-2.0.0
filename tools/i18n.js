const i18n = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');

const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  saveMissing: true,
  react: {
    wait: true,
  },
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
};

if (process.browser) {
  i18n
    .use(XHR)
    .use(LanguageDetector);
}

if (!i18n.isInitialized) i18n.init(options);

i18n.getInitialProps = (req, namespaces) => {
  console.log(1);
  if (!namespaces) namespaces = i18n.options.defautlNS;
  if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = () => null;

  const initialI18nStore = {};
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {};
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = req.i18n.services.resourceStore.data[l][ns] || {};
    });
  });
  console.log(10);
  return {
    i18n: req.i18n,
    initialI18nStore,
    initialLanguage: req.i18n.language,
  };
};

module.exports = i18n;
