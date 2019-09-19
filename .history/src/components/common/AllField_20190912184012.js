import React from 'react';
import { TextField, SelectField, MenuItem } from '@material-ui/core/index';


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
    { input, label, meta: { touched, error }, children, ...custom }, options
) => (
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        >
            {
                options.map((item, i) =>
                
                )
            }
        </SelectField>
    );
