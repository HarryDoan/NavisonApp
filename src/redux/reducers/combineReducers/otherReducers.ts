import {APP_LANGUAGE} from '@constants';
import actions from '@redux/actions';

const initialState = {
  isFirstOpenApp: true,
  lang: APP_LANGUAGE.vietnamese,
};

export const other = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_FIRST_OPEN_APP:
      return {...state, isFirstOpenApp: false};
    case actions.SAVE_LANGUAGE:
      return {...state, lang: action.data};

    default:
      return state;
  }
};
