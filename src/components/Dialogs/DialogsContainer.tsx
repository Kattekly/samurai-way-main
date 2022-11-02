import React from 'react';
import {ActionTypes, RootStateType} from "../../Redux/State";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {connect} from "react-redux";

type DialogNewType = {
    store: Store<ReduxStateType, ActionTypes>
}
const DialogsContainer = (props: DialogNewType) => {
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
};

let f1 = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}


let f2 = () => {
    return {}
}

const SuperDialogsContainer = connect(f1, f2)(Dialogs)

export default DialogsContainer;