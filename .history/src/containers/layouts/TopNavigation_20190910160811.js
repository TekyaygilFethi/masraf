import React, { Component } from 'react';



class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <header class="header">
                    <ul class="header-nav">
                        <li>
                            <button id="js-toggle-sidebar" class="header-nav-item">
                                <i class="fas fa-bars"></i>
                            </button>
                        </li>
                    </ul>
                    <ul class="header-nav d-none d-sm-flex">
                        <li>
                            <a href="#" data-dropdown class="header-nav-item">Dashboard</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="dashboard-1.html">Dashboard 1</a></li>
                                <li><a class="dropdown-item" href="dashboard-2.html">Dashboard 2 (v.1)</a></li>
                                <li><a class="dropdown-item" href="dashboard-2-1.html">Dashboard 2 (v.2)</a></li>
                                <li><a class="dropdown-item" href="dashboard-3.html">Dashboard 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-dropdown class="header-nav-item">Layout</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="dashboard-1.html">Standart</a></li>
                                <li><a class="dropdown-item" href="layout-horizontal-fluid.html">Horizontal fluid</a></li>
                                <li><a class="dropdown-item" href="layout-horizontal-boxed.html">Horizontal boxed</a></li>
                                <li><a class="dropdown-item" href="layout-inverse-horizontal-fluid.html">Inversed horizontal fluid</a></li>
                                <li><a class="dropdown-item" href="layout-inverse-horizontal-boxed.html">Inversed horizontal boxed</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="header-nav pull-right">
                        <li>
                            <a href="#" data-dropdown class="header-nav-item">
                                <i class="far fa-envelope"></i>
                                <span class="badge badge-pill badge-success">2</span>
                            </a>
                            <ul class="dropdown-menu px-20 py-10">
                                <li class="message">
                                    <div class="avatar avatar-sm">
                                        <img src="images/avatar-3.jpg" alt="" />
                                    </div>
                                    <div class="message-content">
                                        <div class="message-bubble">
                                            <p>Hello, John!</p>
                                        </div>
                                        <small class="text-secondary text-sm">Today, 10:31</small>
                                    </div>
                                    <div class="message-actions">
                                        <button><i class="far fa-trash-alt"></i></button>
                                        <button><i class="far fa-flag"></i></button>
                                    </div>
                                </li>
                                <li class="message">
                                    <div class="avatar avatar-sm">
                                        <img src="images/avatar-3.jpg" alt="" />
                                    </div>
                                    <div class="message-content">
                                        <div class="message-bubble">
                                            <p>What about our project?</p>
                                        </div>
                                        <small class="text-secondary text-sm">Today, 10:32</small>
                                    </div>
                                    <div class="message-actions">
                                        <button><i class="far fa-trash-alt"></i></button>
                                        <button><i class="far fa-flag"></i></button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-dropdown class="header-nav-item">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-pill badge-primary">3</span>
                            </a>
                            <ul class="dropdown-menu px-20 py-10">
                                <li class="event-column event-column-success">
                                    <div class="event-content">
                                        <small class="text-secondary"><i class="far fa-envelope"></i> From example@gmail.com</small>
                                        <p><a href="#">Alex White</a> sent you an email.</p>
                                    </div>
                                    <small class="text-secondary pull-right">1 hr.</small>
                                </li>
                                <li class="event-column event-column-primary">
                                    <div class="event-content">
                                        <small class="text-secondary"><i class="fas fa-thumbtack"></i> New task</small>
                                        <p><b>To <a href="#">John Doe</a>: new API methods.</b></p>
                                        <p class="text-secondary text-sm">Implement new API methods for mobile app.</p>
                                    </div>
                                    <small class="text-secondary pull-right">7 min.</small>
                                </li>
                                <li class="event-column event-column-secondary">
                                    <div class="event-content">
                                        <small class="text-secondary"><i class="far fa-bell"></i> Notification</small>
                                        <p><a href="#">Alex White</a> joined to project</p>
                                    </div>
                                    <small class="text-secondary pull-right">now</small>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" id="js-enter-fullscreen" class="header-nav-item">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-dropdown class="user-panel">
                                <div class="user-panel-image">
                                    <div class="avatar avatar-sm">
                                        <img src="images/avatar-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="user-panel-info">
                                    <p>John Doe</p>
                                    <small class="text-black-50">Administrator</small>
                                </div>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="page-profile.html"><i class="far fa-user"></i> Profile</a></li>
                                <li class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="page-signin.html"><i class="fas fa-power-off"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </header>
            </>
        )
    }
}

export default TopNavigation;            