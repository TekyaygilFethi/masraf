import React from 'react';
import { TextField, SelectField, MenuItem } from '@material-ui/core/index';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

export const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );

export const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
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
