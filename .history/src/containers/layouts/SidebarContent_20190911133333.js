import React, { Component } from 'react';


class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>

                <div class="slimscroll-menu">

                    <div id="sidebar-menu">

                        <ul class="metismenu" id="side-menu">

                            <li class="menu-title">Navigation</li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-airplay"></i>
                                    <span class="badge badge-success badge-pill float-right">4</span>
                                    <span> Dashboards </span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-pocket"></i>
                                    <span> Apps </span>
                                    <span class="menu-arrow"></span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-users"></i>
                                    <span> CRM </span>
                                    <span class="menu-arrow"></span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-shopping-cart"></i>
                                    <span> eCommerce </span>
                                    <span class="menu-arrow"></span>
                                </a>

                            </li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-sidebar"></i>
                                    <span class="badge badge-pink float-right">New</span>
                                    <span> Layouts </span>
                                </a>

                            </li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i class="fe-mail"></i>
                                    <span> Email </span>
                                    <span class="menu-arrow"></span>
                                </a>
                                <ul class="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="email-inbox.html">Inbox</a>
                                    </li>
                                    <li>
                                        <a href="email-read.html">Read Email</a>
                                    </li>
                                    <li>
                                        <a href="email-compose.html">Compose Email</a>
                                    </li>
                                    <li>
                                        <a href="email-templates.html">Email Templates</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                    <div class="clearfix"></div>

                </div>

            </>
        )
    }
}

export default SidebarContent;



