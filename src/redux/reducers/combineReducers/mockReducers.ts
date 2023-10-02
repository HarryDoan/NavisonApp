import {APP_LANGUAGE} from '@constants/index';
import actions from '@redux/actions';

const initialState = {};

export const mockReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_HOME_SCREEN_SUCCESS':
      return {
        ...state,
        ...{
          [action.name]: action.data,
        },
      };
    default:
      return state;
  }
};
