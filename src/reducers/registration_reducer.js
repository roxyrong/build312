import { userConstants } from '../constants/user_constants';

export default function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { 
        registering: true,
        error: '' 
    };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}