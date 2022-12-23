import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import s from './FormsControls.module.css'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormsControls> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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
