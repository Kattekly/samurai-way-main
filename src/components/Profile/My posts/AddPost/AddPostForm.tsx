import {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ButtonSubmit, Textarea} from "../../../common/FormControls/FormsControls";
import {maxLengthCreator} from "../../../../utils/validators/validators";
import s from "./AddPostForm.module.css"

export type AddPostFormDataType = {
    post: string
}
const maxLength = maxLengthCreator(100)
const AddPostForm: FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you post'
                       type='text'
                       name='post'
                       component={Textarea}
                       validate={[maxLength]}
                />
            </div>
            <ButtonSubmit form={AddPostForm}/>
        </form>
    )
}
export const AddPostReduxForm = reduxForm<AddPostFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)