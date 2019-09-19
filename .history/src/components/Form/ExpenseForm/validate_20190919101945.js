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
    debugger;
    if (!values.contents || !values.contents.length) {
        errors.contents = { _error: 'At least one member must be entered' };
    } else {
        const contentsArrayErrors = [];

        values.contents.forEach((content, contentIndex) => {
            const contentErrors = {};
            if (!content || !content.documentDate) {
                contentErrors.documentDate = 'Required';
                contentsArrayErrors[contentIndex] = contentErrors;
            }

        })

        if (contentsArrayErrors.length) {
            errors.members = contentsArrayErrors;
        }
    }

    return errors;
}
