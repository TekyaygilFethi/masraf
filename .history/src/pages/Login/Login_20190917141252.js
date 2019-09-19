import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        return result;
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
