import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";
import usersReduser from "./User-reduser";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    profilePage: dialogsReducer,
    messagePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReduser,
    auth: AuthReducer
})

export type ReduxStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store