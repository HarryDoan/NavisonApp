import {CURRENCY} from '@constants/index';
import I18n from 'i18n';
import {t} from 'i18next';
import moment from 'moment';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {check, request, RESULTS} from 'react-native-permissions';

/* eslint-disable no-bitwise */

export const randomNumberString = () => {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
};

const formatter = new Intl.NumberFormat('en-US');
export const formatCurrency = (number: Number, suffix = CURRENCY.sg) => {
  return number ? `${formatter.format(+number)}${suffix}` : `0${suffix}`;
};

export const getDistanceFromUser = ({lat1, lon1, lat2, lon2}: any) => {
  //const p = 0.017453292519943295; // Math.PI / 180
  if (lon2) {
    const p = Math.PI / 180;
    const c = Math.cos;
    const a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  return 0;
};

export const handleExpiredToken = (error: any) => {
  const {code} = error?.response?.data || {};

  if (code === 401) {
    Alert.alert(
      I18n.t('TitleShow.expired_token'),
      I18n.t('TitleShow.have_not_account'),
      [
        {
          text: t('TitleShow.agree'),
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  } else if (code === 403) {
    Alert.alert(
      I18n.t('TitleShow.expired_token'),
      I18n.t('TitleShow.restart_app'),
      [
        {
          text: t('TitleShow.agree'),
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  }
};

export function throttle<T extends Function>(callback: T, limit = 300) {
  let waiting = false;
  return function (this: ThisParameterType<T>) {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

export const handleFormData = (
  objectBody: Record<string, any> = {},
): FormData => {
  if (objectBody instanceof FormData) {
    return objectBody;
  }

  const formData = new FormData();

  for (const [key, value] of Object.entries(objectBody)) {
    if (Array.isArray(value)) {
      value.forEach((v: string | Blob) => {
        if (v || v === '0') {
          if (typeof v === 'string') {
            formData.append(key, v);
          } else if (v instanceof Blob) {
            formData.append(key, v);
          }
        }
      });
    } else if (value || value === 0) {
      if (typeof value === 'string') {
        formData.append(key, value);
      } else if (value instanceof Blob) {
        formData.append(key, value);
      }
    }
  }

  return formData;
};

const checkResult = (result: any) => {
  switch (result) {
    case RESULTS.UNAVAILABLE:
      throw 'This feature is not available';
    case RESULTS.BLOCKED:
      throw 'The permission is blocked';
    case RESULTS.LIMITED:
      throw 'The permission is granted but with limitations';
    case RESULTS.DENIED:
      if (__DEV__) {
        console.log('The permission is denied and can be requested again');
      }
      return false;
    case RESULTS.GRANTED:
      return true;
    default:
      throw 'Unknown error';
  }
};

export const checkAndRequestPermission = async (permission: any) => {
  try {
    const resultCheck = await check(permission);
    if (!checkResult(resultCheck)) {
      const resultRequest = await request(permission);
      if (checkResult(resultRequest)) {
        return true;
      }
      throw 'User denied request permission';
    }
    return true;
  } catch (error) {
    if (__DEV__) {
      console.log('request permission error', {error, permission});
    }
    throw error;
  }
};

export const formatPhoneNumber = (phone: Number, countryCode = '+84') => {
  let sPhone = phone.toString();
  while (sPhone.charAt(0) === '0') {
    sPhone = sPhone.slice(1);
  }
  return countryCode + sPhone;
};

export const listYearFromNow = (from = 0, sort = 1) => {
  const currentYear = new Date().getFullYear();
  return [...Array(currentYear)]
    .map((_, i) => i + 1)
    .filter(y => y >= from)
    .sort((a, b) => (a - b) * sort);
};

export const formatPrice = (number: Number | String) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
