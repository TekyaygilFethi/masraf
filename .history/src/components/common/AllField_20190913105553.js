import React from 'react';
import { TextField, Select } from '@material-ui/core/index';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormControlProps,
    InputAdornment,
} from '@material-ui/core';

export const renderTextField = (
    { input, label, formControlProps, meta: { touched, error }, ...custom },
) => {
    const showError = (touched && error)
    return (
        <FormControl fullWidth {...formControlProps} error={showError}>
            <TextField
                label={label}
                fullWidth
                {...input}
                {...custom}
            />
            {showError &&
                <FormHelperText>{error}</FormHelperText>
            }
        </FormControl>
    );
}

export const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom }
) => (
        <Select
            floatingLabelText={label}
            error={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        />
    );
