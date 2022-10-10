import { combineReducers } from 'redux';
import auth from './authReducer';

const appReducer = combineReducers({
    auth
})

export const LogOut = () => ({ type: 'SIGN_OUT' })

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {

    }
    return appReducer(state, action)
}

export default rootReducer