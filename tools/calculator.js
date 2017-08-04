let multiplier;
let summer;
let helper;
let fee;
const basePrice = 120000;

const calculator = (props, type) => {
  multiplier = 1;
  summer = 0;
  helper = 0;
  // Platforms
  if (props.platform.web) multiplier *= 1.25;
  if (props.platform.ios) multiplier *= 1.25;
  if (props.platform.android) multiplier *= 1.25;
  if (props.platform.desktop) multiplier *= 1.25;
  helper =
    props.platform.web + props.platform.ios +
    props.platform.android + props.platform.desktop;
  if (helper === 2) multiplier *= 0.94;
  if (helper === 3) multiplier *= 0.88;
  if (helper === 4) multiplier *= 0.82;
  // Pages
  multiplier *= props.pages;
  // Design
  if (props.design) multiplier *= 2;
  // Authentication
  if (props.authentication.email) summer += 1000000;
  if (props.authentication.social) summer += 1000000;
  helper =
    props.authentication.email + props.authentication.social;
  if (helper === 2) summer -= 250000;
  // Data
  if (props.data.database) multiplier *= 1.25;
  if (props.data.media) multiplier *= 1.25;
  if (props.data.datasource) multiplier *= 1.25;
  helper =
    props.data.database + props.data.media + props.data.datasource;
  if (helper === 2) multiplier *= 0.9;
  if (helper === 3) multiplier *= 0.8;
  // Geolocation
  if (props.geolocation.simple) summer += 700000;
  if (props.geolocation.advanced) summer += 1000000;
  // Communication
  if (props.communication.email) summer += 500000;
  if (props.communication.push) summer += 500000;
  if (props.communication.sms) summer += 500000;
  if (props.communication.chat) summer += 500000;
  helper =
    props.communication.email + props.communication.push +
    props.communication.sms + props.communication.chat;
  if (helper === 2) summer -= 250000;
  if (helper === 3) summer -= 375000;
  if (helper === 4) summer -= 500000;
  // APIs
  summer += props.apis * 1500000;
  // E-Commerce
  if (props.commerce.basicTransactions) summer += 2000000;
  if (props.commerce.advancedTransactions) summer += 3500000;
  if (props.commerce.basicSubscriptions) summer += 3500000;
  if (props.commerce.advancedSubscriptions) summer += 5000000;
  // Admin
  if (props.admin.admin) multiplier *= 1.25;
  if (props.admin.dashboard) multiplier *= 1.25;
  if (props.admin.reports) multiplier *= 1.25;
  helper =
    props.admin.admin + props.admin.dashboard + props.admin.reports;
  if (helper === 2) multiplier *= 0.9;
  if (helper === 3) multiplier *= 0.8;
  // Product
  if (props.product.prototype) multiplier *= 0.5;
  if (props.product.mvp) multiplier *= 1;
  if (props.product.polished) multiplier *= 1.5;
  // Time
  if (props.time.normal) multiplier *= 1;
  if (props.time.asap) multiplier *= 1.25;
  if (props.time.now) multiplier *= 1.5;
  // Fee
  fee = Math.round((basePrice * multiplier) + summer);

  switch (type) {
    case 'installments':
      if ((fee * 0.2) < 150000) return 150000;
      return Math.round(fee * 0.2);
    case 'payg':
      if ((fee * 0.05) < 150000) return 150000;
      return Math.round(fee * 0.05);
    case 'fee':
      if (fee < 150000) return 150000;
      return Math.round((basePrice * multiplier) + summer);
    default:
      return 0;
  }
};

export default calculator;
