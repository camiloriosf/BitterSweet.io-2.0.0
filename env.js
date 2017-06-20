// No sensitive info, like Credentials

const envConfig = {
  production: {
    console: false,
  },
  development: {
    console: true,
  },
};

const currentEnv = process.env.NODE_ENV || 'development';

export default envConfig[currentEnv];
