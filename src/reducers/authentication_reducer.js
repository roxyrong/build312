import { userConstants } from '../constants/user_constants';

let user = JSON.parse(localStorage.getItem('user')) || undefined;
const initialState = user ? { loggedIn: true, user, error: '' } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.email
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.email
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: '',
        error: action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}