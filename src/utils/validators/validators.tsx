import React from 'react';
export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string) => {
    if (value) return undefined
    return 'Field is required!'
};

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
};
