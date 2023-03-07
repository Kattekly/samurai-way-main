import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";
import {ButtonSubmit, TextareaFC} from "../../common/FormControls/FormsControls";
import s from '../Dialogs.module.css'

export type MessageFormDataType = {
    newMessageText: string
}
const maxLength = maxLengthCreator(250)
const MessageForm: FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you message'
                       type='text'
                       name='newMessageText'
                       validate={[required, maxLength]}
                       component={TextareaFC}
                />
            </div>
            <ButtonSubmit form={MessageForm}/>
        </form>
    )
}
export const MessageReduxForm = reduxForm<MessageFormDataType>({
    form: 'dialogAddMessageForm'
})(MessageForm)

/*type FormDataType = {
    newMessageText: string
}

const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} name="newMessageText"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)*/