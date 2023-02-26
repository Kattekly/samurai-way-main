import React from 'react';
import {ActionTypes} from "../../Redux/State";
import {sendMessageCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

//данные из стейна, пропсы
let mapStateToProps = (state: ReduxStateType) => {
    return {
        profilePage: state.profilePage,
    }
}

//колбеки
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        sendMessageCreator: (newMessageText: string) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);