import React from 'react';
import {Field, WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import s from './FormsControls.module.css'
import {required} from "../../../utils/validators/validators";

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormsControls> = ({input, meta: {touched, error}, children,...props}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const Textarea: React.FC<FormsControls> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<FormsControls> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

/*
export const CreateField = (placeholder: string | null, name: string, validate: typeof required[], component: React.FC<FormsControls>, props: any, text: string | null) => (
        <div>
            <Field placeholder={placeholder} name={name} component={validate} validate={component} {...props}/> {text}
        </div>
    )
*/

/*
export const Textarea: React.FC<FormsControls> = ({input, meta, ...props}) => {
    /!*const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );*!/
};

export const Input: React.FC<FormsControls> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};*/
