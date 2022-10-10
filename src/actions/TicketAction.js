import * as ACTION_TYPES from "@constants/ActionTypes";

export const Ticket            = payload   => ({ type: ACTION_TYPES.TICKET, data: payload })
export const TicketDetail      = payload   => ({ type: ACTION_TYPES.TICKET_DETAIL, data: payload })