export const HEADER = {
  height: 55,
  titleSize: 16,
};

export const RETURN_URL = '';

export const RESPONSE_CODE_VN_PAY = {
  userCancel: '24',
  success: '00',
};

export const PHONE_REGEX =
  /((086|096|097|098|032|033|034|035|036|037|038|039|088|091|094|083|084|085|081|082|089|090|093|070|079|077|076|078|092|056|058|099|059)+([0-9]{7})\b)/g;
// export const PHONE_REGEX =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
export const NUMBER_REGEX = /^[0-9]*$/;

export const NUMBER_FLOAT_REGEX = /^\d*\.?\d*$/;

export const CODE_REGEX = /^[a-zA-Z0-9]+$/;

export const ALPHABET_REGEX = /^[a-zA-Z ]*$/;

export const HISTORY_TYPE = {
  all: 'all',
  receive: 'receive',
  withdraw: 'withdraw',
  recharge: 'recharge',
  transfer: 'transfer',
  buy_ruby: 'buy_ruby',
  sell_ruby: 'sell_ruby',
};

export const HISTORY_STATUS = {
  all: 'all',
  waiting: '0',
  success: '1',
  fail: '2',
};

export const APP_LANGUAGE = {
  vietnamese: 'vi',
  english: 'en',
};

export const TOAST_TYPE = {
  success: 'success',
  error: 'error',
};

export const MESSAGES_TYPE = {
  unread: 'unread',
  no_response: 'no_response',
};

export const CURRENCY = {
  sg: '$',
  vn: 'đ',
};

export const CHECK_FAVORITE = {
  NO_LIKE: 0,
  LIKE: 1,
};
