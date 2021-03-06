import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { sidebarToggle } from '../../redux/modules/sidebarToggle'
import { Link } from 'react-router-dom'

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {

    }

    //Sidebar ekranını açma kapatma işlemi
    handleToggleSidebar() { this.props.sidebarToggle(); }

    //Bildirimleri temizleme işlemi
    handleAllNotificationClear() {

    }

    render() {
        return (

            <>
                <div class="navbar-custom">
                    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li>
                            <button class="button-menu-mobile waves-effect waves-light left" onClick={this.handleToggleSidebar}>
                                <i class="fe-menu"></i>
                            </button>
                        </li>
                    </ul>
                    <ul class="list-unstyled topnav-menu float-right mb-0">

                        <li class="dropdown notification-list">
                            <div class="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-bell noti-icon"></i>
                                <span class="badge badge-danger rounded-circle noti-icon-badge">9</span>
                            </div>
                            <div class="dropdown-menu dropdown-menu-right dropdown-lg">


                                <div class="dropdown-item noti-title">
                                    <h5 class="m-0">
                                        <span class="float-right">
                                            <span class="text-dark pointer" onClick={(e) => { e.preventDefault(); }}>
                                                <small><FormattedMessage id="topNavigation.clearAll" /></small>
                                            </span>
                                        </span><FormattedMessage id="topNavigation.notification" />
                                    </h5>
                                </div>

                                <div class="slimscroll noti-scroll">
                                    <div class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </li>

                        <li class="dropdown notification-list">
                            <div class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="fe-user noti-icon"></i>
                                <span class="pro-user-name ml-1">
                                    Geneva <i class="mdi mdi-chevron-down"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">

                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow m-0"> <FormattedMessage id="topNavigation.welcome" /> </h6>
                                </div>

                                <Link to="/account" class="dropdown-item notify-item">
                                    <i class="fe-user"></i>
                                    <span><FormattedMessage id="topNavigation.myAccount" /></span>
                                </Link>

                                <div class="dropdown-divider"></div>

                                <Link to="/login" class="dropdown-item notify-item">
                                    <i class="fe-log-out"></i>
                                    <span><FormattedMessage id="topNavigation.logout" /></span>
                                </Link>

                            </div>
                        </li>

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

