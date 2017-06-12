import React from 'react';
import Head from 'next/head';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { blue, red } from 'material-ui/styles/colors';
import Header from './Header';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: red,
  }),
});

const styleSheet = createStyleSheet('App', theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
    a: {
      color: 'inherit',
    },
  },
}));

let AppWrapper = props => props.children;

AppWrapper = withStyles(styleSheet)(AppWrapper);

export default ({ children, title = 'BitterSweet.io' }) => (
  <MuiThemeProvider theme={muiTheme}>
    <AppWrapper>
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <Header />
        <div>
          {children}
        </div>
      </div>
    </AppWrapper>
  </MuiThemeProvider>
);
