// No sensitive info, like Credentials

const envConfig = {
  production: {
    console: false,
    imageURI: 'https://1021379388.rsc.cdn77.org/static/',
  },
  development: {
    console: true,
    imageURI: 'static/',
  },
};

const currentEnv = process.env.NODE_ENV || 'development';

export default envConfig[currentEnv];
