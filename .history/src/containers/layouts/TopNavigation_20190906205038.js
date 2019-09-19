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

                    </ul>
                </div>

            </>

        )
    }
}

export default Layout;



<div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">

        {/* Buraya Dil sekmesi gelecek. */}

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

                    <a href="javascript:void(0);" class="dropdown-item notify-item active">
                        <div class="notify-icon">
                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                        <p class="notify-details">Cristina Pride</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>Hi, How are you? What about our next meeting</small>
                        </p>
                    </a>

                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-primary">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">Caleb Flakelar commented on Admin
                    <small class="text-muted">1 min ago</small>
                        </p>
                    </a>

                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon">
                            <img src="assets/images/users/user-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                        <p class="notify-details">Karen Robinson</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>Wow ! this admin looks good and awesome design</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-warning">
                            <i class="mdi mdi-account-plus"></i>
                        </div>
                        <p class="notify-details">New user registered.
                    <small class="text-muted">5 hours ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-info">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">Caleb Flakelar commented on Admin
                    <small class="text-muted">4 days ago</small>
                        </p>
                    </a>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-secondary">
                            <i class="mdi mdi-heart"></i>
                        </div>
                        <p class="notify-details">Carlos Crouch liked
                    <b>Admin</b>
                            <small class="text-muted">13 days ago</small>
                        </p>
                    </a>
                </div>

                <!-- All-->
        <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                    View all
            <i class="fi-arrow-right"></i>
                </a>

            </div>
        </li>

        <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle">
                    <span class="pro-user-name ml-1">
                        Geneva <i class="mdi mdi-chevron-down"></i>
                    </span>
    </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">

                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-user"></i>
                        <span>My Account</span>
                    </a>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-settings"></i>
                        <span>Settings</span>
                    </a>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-lock"></i>
                        <span>Lock Screen</span>
                    </a>

                    <div class="dropdown-divider"></div>


                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="fe-log-out"></i>
                        <span>Logout</span>
                    </a>

                </div>
</li>
</ul>

        <div class="logo-box">
            <a href="index.html" class="logo text-center">
                <span class="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height="18">
    </span>
                    <span class="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="24">
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