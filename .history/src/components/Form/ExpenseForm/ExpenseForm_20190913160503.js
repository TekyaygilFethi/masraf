import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem, Button } from '@material-ui/core/index';


const ExpenseForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting } = props;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label="First Name"
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field name="lastName" component={renderTextField} label="Last Name" />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label="First Name"
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field name="lastName" component={renderTextField} label="Last Name" />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label="First Name"
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field name="lastName" component={renderTextField} label="Last Name" />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="favoriteColor"
                            component={renderSelectField}
                            label="Favorite Color"
                        >
                            <MenuItem value="ff0000"> Red  </MenuItem>
                            <MenuItem value="00ff00"> Green</MenuItem>
                            <MenuItem value="0000ff"> Blue </MenuItem>
                        </Field>
                    </div>
                    <div className="col-sm-6">
                        <Field
                            name="notes"
                            component={renderTextField}
                            multiline={true}
                            label="Notes"
                            rows={2}
                        />
                    </div>
                </div>
                <div>
                    <Button type="submit" disabled={pristine || submitting}>Submit</Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values </Button>
                </div>
            </form>
        </>
    );
};

export default reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(ExpenseForm);
