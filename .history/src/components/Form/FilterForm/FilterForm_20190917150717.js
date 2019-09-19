import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import validate from './validate';
import { renderTextField } from '../../common/AllField';
import { Button } from '@material-ui/core/index';
import { connect } from 'react-redux';


const FilterForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, intl } = props;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-3">
                        <Field
                            name="username"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "loginform.username" })}
                        />

                    </div>
                    <div className="col-sm-3">

                        <Field
                            name="password"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "loginform.password" })}
                        />
                    </div>
                    <div className="col-sm-2">

                        <div className="form-group">
                            <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" >Submit</Button>
                            <Button type="button" disabled={pristine || submitting} onClick={reset} >Clear Values </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};



FilterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
};

FilterForm.defaultProps = {
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm({
    form: 'FilterForm',
    validate,
})(injectIntl(FilterForm)));
