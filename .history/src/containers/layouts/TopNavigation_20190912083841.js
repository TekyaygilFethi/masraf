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
                <div className="navbar-custom">
                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li>
                            <button className="button-menu-mobile waves-effect waves-light left" onClick={this.handleToggleSidebar}>
                                <i className="fe-menu"></i>
                            </button>
                        </li>
                    </ul>
                    <ul className="list-unstyled topnav-menu float-right mb-0">

                        <li className="dropdown notification-list">
                            <div className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="fe-bell noti-icon"></i>
                                <span className="badge badge-danger rounded-circle noti-icon-badge">9</span>
                            </div>
                            <div className="dropdown-menu dropdown-menu-right dropdown-lg">


                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0">
                                        <span className="float-right">
                                            <span className="text-dark pointer" onClick={(e) => { e.preventDefault(); }}>
                                                <small><FormattedMessage id="topNavigation.clearAll" /></small>
                                            </span>
                                        </span><FormattedMessage id="topNavigation.notification" />
                                    </h5>
                                </div>

                                <div className="slimscroll noti-scroll">
                                    <div className="dropdown-item notify-item">
                                        <div className="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div className="dropdown-item notify-item">
                                        <div className="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div className="dropdown-item notify-item">
                                        <div className="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <div className="dropdown-item notify-item">
                                        <div className="notify-icon">
                                            <i className="fa fa-user"></i></div>
                                        <p className="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </li>

                        <li className="dropdown notification-list">
                            <div className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="fe-user noti-icon"></i>
                                <span className="pro-user-name ml-1">
                                    Geneva <i className="mdi mdi-chevron-down"></i>
                                </span>
                            </div>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0"> <FormattedMessage id="topNavigation.welcome" /> </h6>
                                </div>

                                <Link to="/account" className="dropdown-item notify-item">
                                    <i className="fe-user"></i>
                                    <span><FormattedMessage id="topNavigation.myAccount" /></span>
                                </Link>

                                <div className="dropdown-divider"></div>

                                <Link to="/login" className="dropdown-item notify-item">
                                    <i className="fe-log-out"></i>
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

