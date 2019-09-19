import React from 'react';
import { TextField, Select } from '@material-ui/core/index';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormControlProps,
    InputAdornment,
    InputLabel
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
    { input, label, name, id, formControlProps meta: { touched, error }, children, ...custom }
) => {
    const showError = (touched && error)
    return (
        <FormControl fullWidth {...formControlProps} error={showError} >
            <InputLabel htmlFor="age-simple">{label}</InputLabel>
            <Select
                inputProps={{
                    name: { name },
                    id: { id },
                }}
                floatingLabelText={label}
                error={touched && error}
                {...input}
                onChange={(event, index, value) => input.onChange(value)}
                children={children}
                {...custom}
            />
            {showError &&
                <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
            }
        </>
    );
}
