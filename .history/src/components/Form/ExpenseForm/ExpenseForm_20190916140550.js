import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem, Button } from '@material-ui/core/index';
import { connect } from 'net';


const ExpenseForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, intl } = props;
    debugger;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label=""
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
                    <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" >Submit</Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} >Clear Values </Button>
                </div>
            </form>
        </>
    );
};



ExpenseForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

ExpenseForm.defaultProps = {
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm({
    form: 'ExpenseForm', // a unique identifier for this form
    validate,
})(injectIntl(ExpenseForm)));
