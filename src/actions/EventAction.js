import * as ACTION_TYPES from "@constants/ActionTypes";

export const Event          = payload   => ({ type: ACTION_TYPES.EVENT, data: payload })
export const EventDetail    = payload   => ({ type: ACTION_TYPES.EVENT_DETAIL, data: payload })