import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

export default function (values) {
    const errors = {};
    const requiredFields = [
        'username',
        'password',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = <FormattedMessage id="validate.required" />;
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}
