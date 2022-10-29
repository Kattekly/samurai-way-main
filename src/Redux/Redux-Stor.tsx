import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer
})


let stor = createStore(reducers)


export default stor