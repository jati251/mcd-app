import { FETCH_MENU } from "../actions/actionType"

const initialState = {
    menu: {},
}
function menuDetailReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state
    }
}

export default menuDetailReducer