import {any} from './../../node_modules/@types/prop-types/index.d';
import {handleExpiredToken, throttle} from './helper';
import store from '@redux/store';
import axios from 'axios';

axios.defaults.baseURL =
  'http://115.78.6.138:8180/castlemock/mock/rest/project/fraR9S/application/Np8JaX/';

const getDataBody = (config: any) => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

const _handleExpiredToken = throttle(handleExpiredToken, 300);

//TODO: REQUEST
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__ && config.url) {
      // console.log(
      //   `%c [REQUEST] ${config?.url}`,
      //   'color: #458B00; font-weight: bold',
      //   config,
      // );
      console.log('url:', config.url);
      // console.log('method:', config.method);
      console.log('data:', config.data);
      console.log('params:', config.params);
    }

    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

//TODO: RESPONSE
axios.interceptors.response.use(
  response => {
    // if (__DEV__ && response.config.url) {
    //   console.log(
    //     `%c [RESPONSE] ${response.config.url}`,
    //     'color: #CD950C; font-weight: bold',
    //     response,
    //   );
    //   console.log('status:', response.status);
    //   console.log('data:', response.data);
    // }

    return response;
  },
  error => {
    if (__DEV__) {
      // console.log(
      //   `%c [RESPONSE ERROR] ${error.config.url}`,
      //   'color: #EE3B3B; font-weight: bold',
      //   {dataHeader: error.config.data},
      //   {paramsHeader: error.config.params},
      //   JSON.stringify(error.response.data, null, 2),
      // );
    }

    _handleExpiredToken();
    return Promise.reject(error);
  },
);

export default class HttpService {
  static generateHeader(headers: any = {}) {
    const token = store.getState()?.appToken?.data;

    let options = {
      'Content-Type':
        headers['Content-Type'] || 'application/x-www-form-urlencoded',
      Accept: headers.Accept || 'application/json',
    };

    if (token !== null) {
      options = {
        ...options,
        Authorization: `Bearer ${token}`,
      };
    }

    return options as {[key: string]: string};
  }

  //TODO: GET
  static async get(url: string, params = {}) {
    const language = store.getState()?.other?.lang;
    try {
      return await axios
        .get(url, {
          headers: this.generateHeader(),
          params: {...params, lang: language},
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }

  //TODO: POST
  static async post(url: string, body: any, params = {}) {
    const language = store.getState()?.other?.lang;
    try {
      return await axios
        .post(url, body, {
          headers: this.generateHeader(),
          params: {...params, lang: language},
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }

  //TODO: FORM_DATA
  static async postFormData(url: string, formData: any, params = {}) {
    const language = store.getState()?.other?.lang;
    try {
      return await axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            ...this.generateHeader(),
          },
          params: {...params, lang: language},
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }

  //TODO: PUT
  static async put(url: string, data: any) {
    try {
      return await axios
        .put(url, data, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }

  //TODO: PATCH
  static async patch(url: string, data: any) {
    try {
      return await axios
        .patch(url, data, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }

  //TODO: DELETE
  static async delete(url: string) {
    try {
      return await axios
        .delete(url, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error: any) {
      throw error.response;
    }
  }
}
