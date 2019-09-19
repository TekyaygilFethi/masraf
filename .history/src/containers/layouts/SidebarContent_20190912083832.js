import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';


class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="left-side-menu">

                <div className="slimscroll-menu sidebarTop">

                    <div id="sidebar-menu">

                        <ul className="metismenu mt-5" id="side-menu">

                            <li className="menu-title"> <FormattedMessage id="sidebar.navigation" /> </li>

                            <li>
                                <Link to="/">
                                    <i className="fe-home"></i>
                                    <span className="badge badge-success badge-pill float-right"></span>
                                    <span> <FormattedMessage id="sidebar.menu1" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/travel">
                                    <i className="fe-navigation"></i>
                                    <span> <FormattedMessage id="sidebar.menu2" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/reservation">
                                    <i className="fe-phone"></i>
                                    <span> <FormattedMessage id="sidebar.menu3" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/saved">
                                    <i className="fe-save"></i>
                                    <span> <FormattedMessage id="sidebar.menu4" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>

                            </li>

                            <li>
                                <Link to="/history">
                                    <i className="fa fa-history"></i>
                                    <span> <FormattedMessage id="sidebar.menu5" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>


                            <li>
                                <Link to="/waiting">
                                    <i className="fe-file-text"></i>
                                    <span> <FormattedMessage id="sidebar.menu6" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/confirm">
                                    <i className="fe-thumbs-up"></i>
                                    <span> <FormattedMessage id="sidebar.menu7" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reject">
                                    <i className="fe-thumbs-down"></i>
                                    <span> <FormattedMessage id="sidebar.menu8" /> </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className="clearfix"></div>

                </div>

            </div>
        )
    }
}

export default SidebarContent;



