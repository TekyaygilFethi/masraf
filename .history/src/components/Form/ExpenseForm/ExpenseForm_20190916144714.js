import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import validate from './validate';
import { renderSelectField, renderTextField } from '../../common/AllField';
import { MenuItem, Button } from '@material-ui/core/index';
import { connect } from 'react-redux';


const ExpenseForm = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting, intl } = props;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="documentDate"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.documentDate" })}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            name="amountType"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.amountType" })}
                        >
                            <MenuItem value="ff0000"> KDV DAHİL  </MenuItem>
                        </Field>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field name="companyName"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.companyName" })}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field name="amount"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.amount" })}
                        />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="documentType"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.documentType" })}
                        >
                            <MenuItem value="yemek"> Fatura  </MenuItem>
                            <MenuItem value="konaklama"> Fiş </MenuItem>
                        </Field>
                    </div>
                    <div className="col-sm-6">
                        <Field name="currency"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.currency" })}
                        >
                            <MenuItem value="try"> TRY  </MenuItem>
                            <MenuItem value="usd"> USD </MenuItem>
                            <MenuItem value="eur"> EUR </MenuItem>
                        </Field>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field name="tinNumber"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.tinNumber" })}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field name="vatRate"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.vatRate" })}
                        >
                            <MenuItem value="try"> %1  </MenuItem>
                            <MenuItem value="usd"> %8 </MenuItem>
                            <MenuItem value="eur"> %18 </MenuItem>
                        </Field>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="documentNo"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.documentNo" })}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            name="vatNotInclusive"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.vatNotInclusive" })}
                        />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="expenseType"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.expenseType" })}
                        >
                            <MenuItem value="yemek"> Yemek  </MenuItem>
                            <MenuItem value="konaklama"> Konaklama </MenuItem>
                            <MenuItem value="ulasim"> Ulaşım </MenuItem>
                        </Field>
                    </div>
                    <div className="col-sm-6">
                        <Field
                            name="vatAmount"
                            component={renderTextField}
                            label={intl.formatMessage({ id: "expenseform.vatAmounts" })}
                        />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-6">
                        <Field
                            name="payloadType"
                            component={renderSelectField}
                            label={intl.formatMessage({ id: "expenseform.payloadType" })}
                        >
                            <MenuItem value="ff0000"> Nakit  </MenuItem>
                            <MenuItem value="00ff00"> Kredi Kartı</MenuItem>
                            <MenuItem value="0000ff"> Şirket Kredi Kartı </MenuItem>
                        </Field>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-sm-12">
                        <Field
                            name="notes"
                            component={renderTextField}
                            multiline={true}
                            label={intl.formatMessage({ id: "expenseform.s" })}
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
    form: 'ExpenseForm',
    validate,
})(injectIntl(ExpenseForm)));
