import { FETCH_MENUS, FETCH_MENU } from "../actions/actionType"

const initialState = {
    menus: [],
    menu: {}
}
function menusReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENUS:
            return {
                ...state,
                menus: action.payload
            }
        case FETCH_MENU:
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state
    }



}

export default menusReducer