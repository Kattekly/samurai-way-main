import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import s from './FormsControls.module.css'

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}

export const Textarea: React.FC<FormsControls> = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl}>
            <textarea {...input} {...props}/>
        </div>
    );
};
