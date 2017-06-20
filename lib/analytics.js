import ReactGA from 'react-ga';
import env from '../env';

const log = (message) => {
  if (env.console) console.log(message);
};

export const initGA = () => {
  log('GA init');
  ReactGA.initialize('UA-100581684-1');
};

export const setUser = (userId) => {
  log(`set user ${userId}`);
  ReactGA.set({ userId });
};

export const logPageView = () => {
  log(`Logging pageview for ${window.location.pathname} ${window.location.hash}`);
  ReactGA.set({ page: window.location.pathname });
  if (window.location.hash === '') ReactGA.pageview('#home');
  else ReactGA.pageview(window.location.hash);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    log(`Logging action ${category} ${action}`);
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    log(`Logging exception ${description} ${fatal}`);
    ReactGA.exception({ description, fatal });
  }
};
