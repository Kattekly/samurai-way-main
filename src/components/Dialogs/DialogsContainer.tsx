import React from 'react';
import {ActionTypes} from "../../Redux/State";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

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
    }
}

//колбеки
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateMessageBodyCreator: (body: string) => {
            dispatch(updateMessageBodyCreator(body))
        },
        sendMessageCreator: (newMessageText: string) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}


/*let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);