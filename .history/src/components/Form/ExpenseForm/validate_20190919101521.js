export default function (values) {
    const errors = {};
    const requiredFields = [
        'documentDate',
        'amountType',
        'email',
        'favoriteColor',
        'notes',
    ];
    // requiredFields.forEach(field => {
    //     if (!values[field]) {
    //         errors[field] = 'Required';
    //     }
    // });

    if (!values.contents || !values.contents.length) {
        errors.contents = { _error: 'At least one member must be entered' };
    } else {
        const contentsArrayErrors = [];

        values.contents.forEach((member, memberIndex) => {
            const contentErrors = {};
            if (!member || !member.documentDate) {
                contentErrors.documentDate = 'Required';
                contentsArrayErrors[memberIndex] = contentErrors;
            }

        })

    }

    return errors;
}
