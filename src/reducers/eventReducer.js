const initialState = {
    events:[],
    detail:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EVENT':
            return {
                ...state,
                events: action.data
            };
        case 'EVENT_DETAIL':
            return {
                ...state,
                detail: action.data
            };
        default:
            return state
    }
}