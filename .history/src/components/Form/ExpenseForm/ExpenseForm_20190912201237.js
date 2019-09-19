import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem } from '@material-ui/core/index';


const ExpenseForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstName"
                    component={renderTextField}
                    label="First Name"
                />
            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name" />
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
                    <MenuItem value="ff0000" primaryText="Red" />
                    <MenuItem value="00ff00" primaryText="Green" />
                    <MenuItem value="0000ff" primaryText="Blue" />
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
    );
};

export default reduxForm({
    form: 'ExpenseFormModal', // a unique identifier for this form
})(ExpenseForm);
