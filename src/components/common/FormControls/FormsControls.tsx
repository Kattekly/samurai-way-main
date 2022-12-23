import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

type FormsControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
}

export const Textarea: React.FC<FormsControls> = ({input, meta, ...props}) => {
    debugger
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    );
};
