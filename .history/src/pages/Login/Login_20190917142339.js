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
                <div className="authentication-bg authentication-bg-pattern">
                    <div className="account-pages mt-5 mb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-8 col-lg-6 col-xl-5">
                                    <div class="card bg-pattern">
                                        <div class="card-body p-4">

                                            <div class="text-center w-75 m-auto">
                                                <a href="index.html">
                                                    <span>IDECON LOGO</span>
                                                </a>
                                                <p class="text-muted mb-4 mt-3">Enter your email address and password to access admin panel.</p>
                                            </div>

                                            <LoginForm onSubmit={this.handleSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
