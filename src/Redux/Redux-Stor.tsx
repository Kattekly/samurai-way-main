import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";

let reducers = combineReducers({
    profilePage: dialogsReducer,
    messagePage: profileReducer,
    sidebar: sidebarReducer
})

type RootState = typeof reducers;


export type ReduxStateType = ReturnType<RootState>

let store = createStore(reducers)

export default store