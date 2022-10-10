import * as ACTION_TYPES from "@constants/ActionTypes";

export const SignIn         = payload   => ({ type: ACTION_TYPES.SIGN_IN, data: payload })
export const SignOut        = payload   => ({ type: ACTION_TYPES.SIGN_OUT, data: payload })