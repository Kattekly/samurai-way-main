import React from 'react';
import {ActionTypes, RootStateType} from "../../Redux/State";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/Dialogs-reduser";
import Dialogs, {DialogNewType} from "./Dialogs";

import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {Redirect} from "react-router-dom";

/*type DialogNewType = {
    store: Store<ReduxStateType, ActionTypes>
}*/
/*const DialogsContainer = (props: DialogNewType) => {
    let state = props.store.getState().profilePage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateMessageBodyCreator(body))
    }

    return (
        <Dialogs updateMessageBodyCreator={onNewMessageChange}
                 sendMessageCreator={onSendMessageClick} profilePage={state}/>
    );
};*/

//данные из стейна, пропсы
let mapStateToProps = (state: ReduxStateType) => {

    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}

//колбеки
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateMessageBodyCreator: (body: string) => {dispatch(updateMessageBodyCreator(body))},
        sendMessageCreator: () => {dispatch(sendMessageCreator())}
    }
}

let AuthRedirectComponent = (props: DialogNewType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;