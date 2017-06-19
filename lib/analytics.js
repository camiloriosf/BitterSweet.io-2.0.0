import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-100581684-1');
};

export const setUser = (userId) => {
  console.log(`set user ${userId}`);
  ReactGA.set({ userId });
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname} ${window.location.hash}`);
  ReactGA.set({ page: window.location.pathname });
  if (window.location.hash === '') ReactGA.pageview('#home');
  else ReactGA.pageview(window.location.hash);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    console.log(`Logging action ${category} ${action}`);
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
