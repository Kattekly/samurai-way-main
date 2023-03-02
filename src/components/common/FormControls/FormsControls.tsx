import React from 'react';
import {Field, WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'
import {FieldValidatorType} from "../../../utils/validators/validators";

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormsControls> = ({input, meta: {touched, error}, children, ...props}) => {
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

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>