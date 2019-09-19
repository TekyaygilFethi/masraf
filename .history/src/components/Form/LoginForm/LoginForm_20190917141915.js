import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import validate from './validate';
import { renderTextField } from '../../common/AllField';
import { connect } from 'react-redux';


const LoginForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, intl } = props;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <Field
                        name="username"
                        component={renderTextField}
                        label={intl.formatMessage({ id: "loginform.username" })}
                    />
                </div>
                <div className="form-group mb-3">
                    <Field
                        name="password"
                        component={renderTextField}
                        label={intl.formatMessage({ id: "loginform.password" })}
                    />
                </div>
                <div>
                    <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" >Submit</Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} >Clear Values </Button>
                </div>
            </form>
        </>
    );
};



LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm({
    form: 'LoginForm',
    validate,
})(injectIntl(LoginForm)));
