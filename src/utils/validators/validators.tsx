import React from 'react';

const requiredField = (value: string) => {
    if (value) return undefined
    return 'Field is required!'

};

