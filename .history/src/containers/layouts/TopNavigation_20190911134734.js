import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { sidebarToggle } from '../../redux/modules/sidebarToggle'


class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {





    }

    handleToggleSidebar() {
        this.props.sidebarToggle();
    }

    render() {
        return (

            <>
                <div class="navbar-custom">
                    <ul class="list-unstyled topnav-menu float-right mb-0">

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-bell noti-icon"></i>
                                <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-lg">


                                <div class="dropdown-item noti-title">
                                    <h5 class="m-0">
                                        <span class="float-right">
                                            <a href="#" class="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                </h5>
                                </div>

                                <div class="slimscroll noti-scroll">
                                    <div class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>


                                    <div class="dropdown-item notify-item ">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item ">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item ">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item ">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>

                                    <p></p>
                                </div>
                            </div>
                        </li>

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle" />
                                <span class="pro-user-name ml-1">
                                    Geneva <i class="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">

                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>


                                <a href="#" class="dropdown-item notify-item">
                                    <i class="fe-user"></i>
                                    <span>My Account</span>
                                </a>


                                <a href="#" class="dropdown-item notify-item">
                                    <i class="fe-settings"></i>
                                    <span>Settings</span>
                                </a>


                                <a href="#" class="dropdown-item notify-item">
                                    <i class="fe-lock"></i>
                                    <span>Lock Screen</span>
                                </a>

                                <div class="dropdown-divider"></div>


                                <a href="#" class="dropdown-item notify-item">
                                    <i class="fe-log-out"></i>
                                    <span>Logout</span>
                                </a>

                            </div>
                        </li>
                        <li>
                            <button class="button-menu-mobile waves-effect waves-light left" onClick={this.handleToggleSidebar}>
                                <i class="fe-menu"></i>
                            </button>
                        </li>
                    </ul>

                    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">

                    </ul>
                </div>

            </>
        )
    }
}


TopNavigation.propTypes = {
    sidebarToggle: PropTypes.func.isRequired
};
TopNavigation.defaultProps = {};

const mapStateToProps = state => ({
    sidebar: state.sidebar
});
const mapDispatchToProps = {
    sidebarToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopNavigation);

