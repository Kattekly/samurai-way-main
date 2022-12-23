import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import s from './FormsControls.module.css'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}


export const Textarea: React.FC<FormsControls> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};
