const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./tools/i18n');

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: ['en', 'es'], // preload all langages
    ns: ['common'], // need to preload all the namespaces
    backend: {
      loadPath: `${__dirname}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${__dirname}/locales/{{lng}}/{{ns}}.missing.json`,
    },
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express();

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        server.use('/locales', express.static(`${__dirname}/locales`, {
          setHeaders(res) {
            res.setHeader('Cache-Control', 'public,max-age=31536000,immutable');
          },
        }));
        server.use('/static', express.static(`${__dirname}/static`, {
          setHeaders(res) {
            res.setHeader('Cache-Control', 'public,max-age=31536000,immutable');
          },
        }));

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

        // serve robots.txt and sitemap.xml
        const options = {
          root: `${__dirname}/static/`,
          headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
          },
        };
        server.get('/robots.txt', (req, res) => (
          res.status(200).sendFile('robots.txt', options)
        ));
        server.get('/sitemap.xml', (req, res) => (
          res.status(200).sendFile('sitemap.xml', options)
        ));

        // use next.js
        server.get('*', (req, res) => handle(req, res));

        server.listen(process.env.PORT || 3000, (err) => {
          if (err) throw err;
          console.log('> Ready on http://localhost:3000');
        });
      });
  });
