import {put, select} from '@redux-saga/core/effects';
import {_onFail, _onSuccess} from '@redux/actions';
import api from '@utils/api';

export const ACCOUNT_API = {
  username: '',
  password: '',
};

export const URL_API = {
  user: {
    test: 'getHomeScreen',

    deleteAccount: 'deleteAccount',
  },
};
