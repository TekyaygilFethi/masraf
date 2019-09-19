import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem } from '@material-ui/core/index';


const ExpenseForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, valid } = props;
    return (
        <>
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                <div>
                    <Field name="email" component={renderTextField} label="Email" />
                </div>

                <div>
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

                <div>
                    <Field
                        name="notes"
                        component={renderTextField}
                        label="Notes"
                        multiLine={true}
                        rows={2}
                    />
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
        </button>
                </div>
        </form>
        </>
    );
};

export default reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(ExpenseForm);
