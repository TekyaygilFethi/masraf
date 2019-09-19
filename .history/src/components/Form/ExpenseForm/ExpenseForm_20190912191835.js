import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem } from '@material-ui/core/index';


const ExpenseForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    debugger;
    return (
        <form onSubmit={handleSubmit}>
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
            <div className="col-sm-6">
                <Field name="email" component={renderTextField} label="Email" />
            </div>


            <div className="col-sm-6">
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(ExpenseForm);
