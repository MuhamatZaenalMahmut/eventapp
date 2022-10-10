const initialState = {
    tickets:[],
    detail:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TICKET':
            return {
                ...state,
                tickets: action.data
            };
        case 'TICKET_DETAIL':
            return {
                ...state,
                detail: action.data
            };
        default:
            return state
    }
}