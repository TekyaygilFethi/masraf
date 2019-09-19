import React, { Component } from 'react';



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div class="navbar-custom">
                    <ul class="list-unstyled topnav-menu float-right mb-0">



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
                    </ul>

                    <div class="logo-box">
                        <a href="index.html" class="logo text-center">
                            <span class="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="18" />
                            </span>
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="24" />
                                {/* <!-- IDECON LOGOSU GELECEK BURAYA --> */}
                            </span>
                        </a>
                    </div>

                    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                        <li>
                            <button class="button-menu-mobile waves-effect waves-light">
                                <i class="fe-menu"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Layout;            