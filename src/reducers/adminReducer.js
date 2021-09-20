const initState = {
    admin: ''
}

const adminReducer = (state = initState, action) => {

    switch(action.type) {

        case 'LOGGED':
            return {...state, admin: action.payload}

        default:
            return state;

    }

}

export default adminReducer;