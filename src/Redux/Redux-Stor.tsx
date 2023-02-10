import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reduser";
import {sidebarReducer} from "./Sidebar-reduser";
import usersReducer from "./User-reduser";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppReducer} from "./app-reducer";


export type ReduxStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: dialogsReducer,
    messagePage: profileReducer,
    sidebar: sidebarReducer,
    auth: AuthReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: AppReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
))

export default store