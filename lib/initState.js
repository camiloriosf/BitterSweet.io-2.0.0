const initState = {
  quote: {
    id: null,
    time: {
      normal: true,
      asap: false,
      now: false,
    },
    comments: '',
    saved: false,
    product: {
      mvp: true,
      polished: false,
      prototype: false,
    },
    authentication: {
      email: false,
      social: false,
    },
    apis: 0,
    admin: {
      reports: false,
      dashboard: false,
      admin: false,
    },
    commerce: {
      advancedSubscriptions: false,
      advancedTransactions: false,
      basicTransactions: false,
      basicSubscriptions: false,
    },
    communication: {
      chat: false,
      sms: false,
      email: false,
      push: false,
    },
    plan: {
      installments: false,
      payg: true,
      fee: false,
    },
    geolocation: {
      simple: false,
      advanced: false,
    },
    data: {
      database: false,
      datasource: false,
      media: false,
    },
    prices: {
      installments: 150000,
      payg: 150000,
      fee: 150000,
    },
    email: '',
    name: '',
    design: false,
    nda: false,
    platform: {
      desktop: false,
      ios: false,
      web: false,
      android: false,
    },
    pages: 1,
  },
};

export default initState;
