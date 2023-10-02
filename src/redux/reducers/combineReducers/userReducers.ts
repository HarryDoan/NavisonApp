import actions from '@redux/actions';
import {reducerDefault, reducerLoadMore} from '@redux/common/reducers';

const initialState = {
  data: null,
  userToken: null,
  avatar: null,
  isLoading: false,
};

export const user = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const testApi = (...props: any[]) => {
  return reducerDefault(...props, actions.TEST_API);
};
