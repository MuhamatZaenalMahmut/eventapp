const initialState = {
    isLoggedIn: false,
    users:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLoggedIn: true,
                users: action.data
            };
        case 'SIGN_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: ''
            };
        default:
            return state
    }
}