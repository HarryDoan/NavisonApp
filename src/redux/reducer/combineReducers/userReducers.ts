import actions from '@redux/actions';
import {reducerDefault, reducerLoadMore} from '@redux/common/reducers';
import {fakeData} from '@utils/fakeData';

const initialState = {
  data: null,
  userToken: null,
  isLoading: false,
  list_channel: fakeData,
};

export const users = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.SAVE_LIST_CHANNEL:
      return {...state, list_channel: action.payload};
    default:
      return state;
  }
};
