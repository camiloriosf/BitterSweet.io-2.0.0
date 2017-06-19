import ReactGA from 'react-ga';

export const initGA = () => {
  if (process.env.NODE_ENV === 'development') console.log('GA init');
  ReactGA.initialize('UA-100581684-1');
};

export const setUser = (userId) => {
  if (process.env.NODE_ENV === 'development') console.log(`set user ${userId}`);
  ReactGA.set({ userId });
};

export const logPageView = () => {
  if (process.env.NODE_ENV === 'development') console.log(`Logging pageview for ${window.location.pathname} ${window.location.hash}`);
  ReactGA.set({ page: window.location.pathname });
  if (window.location.hash === '') ReactGA.pageview('#home');
  else ReactGA.pageview(window.location.hash);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    if (process.env.NODE_ENV === 'development') console.log(`Logging action ${category} ${action}`);
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    if (process.env.NODE_ENV === 'development') console.log(`Logging exception ${description} ${fatal}`);
    ReactGA.exception({ description, fatal });
  }
};
