const initialState = {
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state
    }
}