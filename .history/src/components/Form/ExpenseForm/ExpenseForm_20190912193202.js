import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { MenuItem } from '@material-ui/core/index';
import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle,
    DatePicker
} from 'redux-form-material-ui'
class ExpenseForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="col-sm-6">
                    <Field name="username" component={TextField} hintText="Street" />

                </div>
                <div className="col-sm-6">
                    <Field name="lastName" component={TextField} hintText="lastName" />
                </div>
                <div className="col-sm-6">
                    <Field name="email" component={TextField} hintText="email" />
                </div>


                <div className="col-sm-6">
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
        </button>
                </div>
            </form>
        )
    }
}


export default reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(ExpenseForm);
