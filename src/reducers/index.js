import { combineReducers } from 'redux';
import eventbrite from './eventbrite_reducer';
import alert from './alert_reducer';
import authentication from './authentication_reducer';
import registration from './registration_reducer';
import user from './user_reducer';

export default combineReducers({
    eventbrite,
    authentication,
    alert,
    registration,
    user
});