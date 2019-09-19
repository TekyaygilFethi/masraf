import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class AddExpenseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: {},
        };
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <Breadcrumb from={<FormattedMessage id="sidebar.menu1" />} isFromActive={false} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <Index.PersonalInfo />
                    </div>
                    <div className="col-sm-5">
                        <Index.ApproverInfo />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Index.SpendingInfo />
                    </div>
                </div>
            </>
        );
    }
}

AddExpenseModal.propTypes = {
};
AddExpenseModal.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddExpenseModal);
