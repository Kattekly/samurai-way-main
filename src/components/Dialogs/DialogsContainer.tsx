import React from 'react';
import {ActionTypes} from "../../Redux/state";
import {sendMessageCreator} from "../../Redux/dialogs-reduser";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-stor";
import withAuthRedirect from "../../hoc/authRedirect";
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

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);