import React from 'react';
import { TextField, SelectField } from '@material-ui/core/index';


export const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
        <TextField
            hintText={label} s
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );

export const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom }
) => (
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        />
    );
