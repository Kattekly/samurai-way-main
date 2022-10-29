import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})


let stor = createStore()


export default stor