import actions from '@redux/actions';
import {reducerDefault, reducerLoadMore} from '@redux/common/reducers';
import {fakeData} from '@utils/fakeData';

const initialState = {
  data: null,
  userToken: null,
  isLoading: false,
  list_channel: fakeData,
  list_channel_to_show: [],
  statusMode: false,
  userKey: '1234',
};

export const users = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SAVE_LIST_CHANNEL:
      return {...state, list_channel: action.payload};
    case actions.STATUS_MODE:
      return {...state, statusMode: !state.statusMode};
    case actions.SAVE_NEW_KEY:
      return {...state, userKey: action.payload};
    case actions.SAVE_LIST_CHANNEL_TO_SHOW:
      return {...state, list_channel_to_show: action.payload};
    default:
      return state;
  }
};
