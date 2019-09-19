import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import validate from './validate';
import { renderSelectField, renderTextField, renderFileField } from '../../common/AllField';
import { MenuItem, Button } from '@material-ui/core/index';
import { connect } from 'react-redux';
import contents from './ExpenseFormContent'



const ExpenseForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, intl } = props;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FieldArray name="contents" component={contents} intl={intl} />
                <div className="row">
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
    form: 'ExpenseForm',
    validate,
})(injectIntl(ExpenseForm)));
