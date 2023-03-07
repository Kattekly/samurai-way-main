import React, {FC} from 'react';
import {Field, submit, WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'
import {FieldValidatorType} from "../../../utils/validators/validators";
import {useDispatch} from "react-redux";
import {
    Button, Checkbox,
    CheckboxProps,
    FormControlLabel,
    FormControlLabelProps,
    TextField,
    TextFieldProps
} from "@material-ui/core";

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

type ButtonSubmitProps = {
    form: any
}
export const ButtonSubmit: FC<ButtonSubmitProps> = ({form}) => {
    const dispatch = useDispatch();

    const onClickSubmit = () => {
        dispatch(submit(form));
    };

    return (
        <button
            className={s.button}
            onClick={onClickSubmit}
        >
            Send
        </button>
    );
};

export const TextareaFC: FC<WrappedFieldProps & TextFieldProps> = ({
                                                                       input,
                                                                       placeholder,
                                                                       variant,
                                                                       type,
                                                                       meta: {touched, error},
                                                                       ...custom
                                                                   }) => {
    return (
        <TextField {...input}
                   style={{marginBottom: '10px'}}
                   error={touched && error}
                   helperText={touched && error}
                   fullWidth
                   label={placeholder}
                   type={type}
                   variant={variant ? variant : 'outlined'}
                   size='small'/>
    )
}


export const CheckboxTC: FC<WrappedFieldProps & CheckboxProps & FormControlLabelProps> = ({
                                                                                              input,
                                                                                              label
                                                                                          }) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={!!input.value}
                onChange={input.onChange}
                color='primary'
            />
        }
        label={label}
    />
);

export type GetStringKeys<T> = Extract<keyof T, string>