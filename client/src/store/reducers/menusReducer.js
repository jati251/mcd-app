import { AYAM_FETCH_MENUS, IKAN_FETCH_MENUS, MINUMAN_FETCH_MENUS, SAPI_FETCH_MENUS, SARAPAN_FETCH_MENUS } from "../actions/actionType"

const initialState = {
    sarapan: [],
    ayam: [],
    ikan: [],
    sapi: [],
    minuman: [],
}
function menusReducer(state = initialState, action) {
    switch (action.type) {
        case SARAPAN_FETCH_MENUS:
            return {
                ...state,
                sarapan: action.payload
            }
        case AYAM_FETCH_MENUS:
            return {
                ...state,
                ayam: action.payload
            }
        case IKAN_FETCH_MENUS:
            return {
                ...state,
                ikan: action.payload
            }
        case SAPI_FETCH_MENUS:
            return {
                ...state,
                sapi: action.payload
            }
        case MINUMAN_FETCH_MENUS:
            return {
                ...state,
                minuman: action.payload
            }
        default:
            return state
    }
}

export default menusReducer