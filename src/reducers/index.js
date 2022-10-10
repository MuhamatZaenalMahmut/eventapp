import { combineReducers } from 'redux';
import users from './userReducer';
import events from './eventReducer';
import tickets from './ticketReducer';

const appReducer = combineReducers({
    users,
    events,
    tickets
})

export const LogOut = () => ({ type: 'SIGN_OUT' })

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {

    }
    return appReducer(state, action)
}

export default rootReducer