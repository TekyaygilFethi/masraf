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
            asd
            {/* <div>
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
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
            </div> */}
        </form>
    );
};

export default reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(ExpenseForm);
