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

                <div class="slimscroll-menu sidebarTop">

                    <div id="sidebar-menu">

                        <ul class="metismenu mt-5" id="side-menu">

                            <li class="menu-title"> <FormattedMessage id="sidebar.navigation" /> </li>

                            <li>
                                <Link to="/">
                                    <i class="fe-home"></i>
                                    <span class="badge badge-success badge-pill float-right"></span>
                                    <span> <FormattedMessage id="sidebar.menu1" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/travel">
                                    <i class="fe-navigation"></i>
                                    <span> <FormattedMessage id="sidebar.menu2" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/reservation">
                                    <i class="fe-phone"></i>
                                    <span> <FormattedMessage id="sidebar.menu3" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/saved">
                                    <i class="fe-save"></i>
                                    <span> <FormattedMessage id="sidebar.menu4" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>

                            </li>

                            <li>
                                <Link to="/history">
                                    <i class="fa fa-history"></i>
                                    <span> <FormattedMessage id="sidebar.menu5" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>


                            <li>
                                <Link to="/waiting">
                                    <i class="fe-file-text"></i>
                                    <span> <FormattedMessage id="sidebar.menu6" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/confirm">
                                    <i class="fa fa-thumbs-up"></i>
                                    <span> <FormattedMessage id="sidebar.menu7" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/reject">
                                    <i class="fa fa-thumbs-down "></i>
                                    <span> <FormattedMessage id="sidebar.menu8" /> </span>
                                    <span class="menu-arrow"></span>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div class="clearfix"></div>

                </div>

            </div>
        )
    }
}

export default SidebarContent;



