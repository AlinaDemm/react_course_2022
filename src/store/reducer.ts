import { UserInfoActionType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
