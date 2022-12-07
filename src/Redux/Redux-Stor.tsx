import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";
import usersReducer from "./User-reduser";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"


export type ReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: dialogsReducer,
    messagePage: profileReducer,
    sidebar: sidebarReducer,
    auth: AuthReducer,
    usersPage: usersReducer
})



let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store