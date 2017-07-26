import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import blue from 'material-ui/colors/blue';

const createDefaultContext = () =>
  MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        primary: blue,
        accent: blue,
      }),
    }),
  });

let context = null;

export function setDefaultContext() {
  context = createDefaultContext();
}

export function getDefaultContext() {
  if (!process.browser) {
    return context;
  }

  if (!context) {
    context = createDefaultContext();
  }

  return context;
}

export default createDefaultContext;
