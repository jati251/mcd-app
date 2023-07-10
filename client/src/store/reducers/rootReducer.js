import { combineReducers } from 'redux'
import menusReducer from './menusReducer'
import menuDetailReducer from './menuDetailReducer'

const rootReducer = combineReducers({
    menus: menusReducer,
    menuDetail: menuDetailReducer
})

export default rootReducer