import React from 'react';
import { TextField, Select } from '@material-ui/core/index';
import { FormControl, FormHelperText, InputLabel, Button } from '@material-ui/core';
import ReactFileReader from 'react-file-reader';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



export const renderTextField = (
    { input, label, formControlProps, meta: { touched, error }, ...custom },
) => {
    const showError = (touched && error)
    return (
        <FormControl fullWidth {...formControlProps} error={showError}>
            <TextField
                label={label}
                error={showError}
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
    { input, label, formControlProps, meta: { touched, error }, children, ...custom }
) => {
    const showError = (touched && error)
    return (
        <FormControl fullWidth {...formControlProps} error={showError} >
            <InputLabel>{label}</InputLabel>
            <Select
                onChange={(event, index, value) => input.onChange(value)}
                {...input}
                {...custom}>
                {children}
            </Select>
            {showError &&
                <FormHelperText>{error}</FormHelperText>
            }
        </FormControl>
    );
}

const adaptFileEventToValue = delegate => e => delegate(e.base64);

export const renderFileField = (
    { input, label, formControlProps, meta: { touched, error }, ...custom },
) => {
    return (
        <>
            <ReactFileReader className="importar col-sm-6" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true}
                multipleFiles={false} handleFiles={adaptFileEventToValue(input.onChange)}>
                <Button {...custom} variant="contained" color="primary" >{label} <CloudUploadIcon style={{ marginLeft: '5px' }} /></Button>
            </ReactFileReader>

            <img className="rounded avatar-xxl img-thumbnail float-right" src={input.value}></img>
        </>
    );
}
