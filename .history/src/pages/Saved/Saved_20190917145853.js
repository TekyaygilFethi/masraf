import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';
import LoginForm from '../../components/Form/LoginForm/LoginForm';

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
