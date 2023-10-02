import {URL_API} from '../common';
import {all, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@redux/actions';
import api from '@utils/api';
import {AnyAction} from 'redux';

function* getHomeScreen(action: AnyAction): Generator<any, void, any> {
  const {dataApi, name} = action.params;
  try {
    const res = yield api.get(dataApi.substring(1));
    console.log('====================================');
    console.log(dataApi);
    console.log(name);
    console.log(res);
    console.log('====================================');
    yield put({
      type: _onSuccess(action.type),
      name,
      data: res,
    });
    action.onSuccess?.(res);
  } catch (error: any) {
    action.onFail?.(error.data.message);
    yield put({type: _onFail(action.type)});
  }
}
function* testApi(action: AnyAction): Generator<any, void, any> {
  const {uri_api} = action.params;
  try {
    const res = yield api.get(uri_api);
    console.log('====================================');
    console.log(uri_api);
    console.log(res);
    console.log('====================================');
    yield put({
      type: _onSuccess(action.type),
      data: res,
    });
    action.onSuccess?.(res);
  } catch (error: any) {
    action.onFail?.(error.data.message);
    yield put({type: _onFail(action.type)});
  }
}

export function* watchMockSagas(): Generator<any, void, any> {
  yield takeEvery(actions.GET_HOME_SCREEN, getHomeScreen);
  yield takeLatest(actions.TEST_API, testApi);
}
