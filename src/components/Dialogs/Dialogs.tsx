import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {ActionTypes, DialogsDataType} from "../../Redux/State";
import {Store} from "redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogNewType = {

    updateMessageBodyCreator: (body: string) => void
    sendMessageCreator: () => void
    profilePage: DialogsDataType
    isAuth: boolean
}


const Dialogs = (props: DialogNewType) => {
    let state = props.profilePage
    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessageCreator()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateMessageBodyCreator(body)
    }

    let addNewMessage = (value: any) => {
        alert(value.newMessageBody)
    }
    /*  if(!props.isAuth) return <Redirect to={'/login'}/>*/

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg'/>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

type FormDataType = {
    text: string
    send: boolean
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;