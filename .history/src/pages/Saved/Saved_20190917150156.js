import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';
import FilterForm from '../../components/Form/FilterForm/FilterForm';
import Breadcrumb from '../../components/common/Breadcrumb';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        return result;
    }

    handleSubmit = (e) => {
        console.log(e);
    }



    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <Breadcrumb from={<FormattedMessage id="sidebar.menu4" />} isFromActive={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <FilterForm onSubmit={this.handleSubmit} /></div>
                </div>
            </>
        );
    }
}

Login.propTypes = {
};
Login.defaultProps = {};

const mapStateToProps = state => ({
    form: state.form
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
