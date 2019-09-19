import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <aside class="sidebar">
                    <a href="dashboard-1.html" class="logo">
                        <img src="images/logo.png" alt=""> <b>Oxios</b>
			</a>
                        <nav>
                            <ul class="sidebar-list">
                                <li>
                                    <form class="input-group">
                                        <div class="input-group-icon"><i class="fas fa-search"></i></div>
                                        <input type="text" class="form-control" placeholder="Search..." />
                                    </form>
                                </li>
                                <li class="sidebar-list-item"><i class="fe fe-sliders"></i> <span>Dashboards</span> <i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="dashboard-1.html">Dashboard 1</a></li>
                                        <li><a class="sidebar-list-item" href="dashboard-2.html">Dashboard 2 (v.1)</a></li>
                                        <li><a class="sidebar-list-item" href="dashboard-2-1.html">Dashboard 2 (v.2)</a></li>
                                        <li><a class="sidebar-list-item" href="dashboard-3.html">Dashboard 3</a></li>
                                    </ul>
                                </li>
                                <li><span class="sidebar-list-header">Pages and extra</span></li>
                                <li><a class="sidebar-list-item" href="page-profile.html"><i class="fe fe-user"></i> <span>Profile</span></a></li>
                                <li><a class="sidebar-list-item" href="page-chat.html"><i class="fe fe-message-square"></i> <span>Chat</span></a></li>
                                <li><a class="sidebar-list-item" href="page-invoice.html"><i class="fe fe-dollar-sign"></i> <span>Invoice</span></a></li>
                                <li><a class="sidebar-list-item" href="page-faq.html"><i class="fe fe-help-circle"></i> <span>FAQ</span></a></li>
                                <li class="sidebar-list-item"><i class="fe fe-layout"></i> <span>Access pages</span> <i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="page-signin.html">Sign In</a></li>
                                        <li><a class="sidebar-list-item" href="page-signup.html">Sign Up</a></li>
                                        <li><a class="sidebar-list-item" href="page-lockscreen.html">Lockscreen</a></li>
                                        <li><a class="sidebar-list-item" href="page-under-construction.html">Under Construction</a></li>
                                        <li><a class="sidebar-list-item" href="page-404.html">404 Error</a></li>
                                        <li><a class="sidebar-list-item" href="page-500.html">500 Error</a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-list-item"><i class="fe fe-folder-plus"></i> <span>Multilevel</span> <i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="#">Level 1</a></li>
                                        <li class="sidebar-list-item">Level 1 <i class="fas fa-chevron-down pull-right"></i></li>
                                        <li>
                                            <ul>
                                                <li><a href="#" class="sidebar-list-item">Level 2</a></li>
                                                <li class="sidebar-list-item">Level 2 <i class="fas fa-chevron-down pull-right"></i></li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#" class="sidebar-list-item">Level 3</a></li>
                                                        <li><a href="#" class="sidebar-list-item">Level 3</a></li>
                                                        <li><a href="#" class="sidebar-list-item">Level 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#" class="sidebar-list-item">Level 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" class="sidebar-list-item">Level 1</a></li>
                                    </ul>
                                </li>
                                <li><span class="sidebar-list-header">User interface</span></li>
                                <li class="sidebar-list-item"><i class="fe fe-layers"></i> <span>Layouts</span> <i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="dashboard-1.html">Standart</a></li>
                                        <li><a class="sidebar-list-item" href="layout-horizontal-fluid.html">Horizontal fluid</a></li>
                                        <li><a class="sidebar-list-item" href="layout-horizontal-boxed.html">Horizontal boxed</a></li>
                                        <li><a class="sidebar-list-item" href="layout-inverse-horizontal-fluid.html">Inversed horizontal fluid</a></li>
                                        <li><a class="sidebar-list-item" href="layout-inverse-horizontal-boxed.html">Inversed horizontal boxed</a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-list-item"><i class="fe fe-box"></i> <span>Components</span> <i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="component-alerts.html">Alerts</a></li>
                                        <li><a class="sidebar-list-item" href="component-buttons.html">Buttons and pagination</a></li>
                                        <li><a class="sidebar-list-item" href="component-box.html">Box</a></li>
                                        <li><a class="sidebar-list-item" href="component-card.html">Card</a></li>
                                        <li><a class="sidebar-list-item" href="component-tables.html">Tables</a></li>
                                        <li><a class="sidebar-list-item" href="component-events.html">Events</a></li>
                                        <li><a class="sidebar-list-item" href="component-widgets.html">Widgets</a></li>
                                        <li><a class="sidebar-list-item" href="component-charts.html">Charts</a></li>
                                        <li><a class="sidebar-list-item" href="component-avatar.html">Avatar</a></li>
                                        <li><a class="sidebar-list-item" href="component-user-panel.html">User panel</a></li>
                                        <li><a class="sidebar-list-item" href="component-image.html">Image</a></li>
                                        <li><a class="sidebar-list-item" href="component-icons.html">Icons</a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-list-item"><i class="fe fe-edit"></i><span>Forms</span><i class="fas fa-chevron-down pull-right"></i></li>
                                <li>
                                    <ul>
                                        <li><a class="sidebar-list-item" href="form-basic.html">Basic form</a></li>
                                        <li><a class="sidebar-list-item" href="form-wizzard.html">Form wizzard</a></li>
                                        <li><a class="sidebar-list-item" href="form-validation.html">Form validation</a></li>
                                        <li><a class="sidebar-list-item" href="form-editor.html">Form editor</a></li>
                                    </ul>
                                </li>
                                <li><a class="sidebar-list-item" href="typography.html"><i class="fe fe-type"></i> <span>Typography</span></a></li>
                            </ul>
                        </nav>
		</aside>

            </>
                )
            }
        }
        
Sidebar.propTypes = {
                };
Sidebar.defaultProps = {};
                
const mapStateToProps = state => ({
                });
const mapDispatchToProps = {
                };
                export default connect(
                    mapStateToProps,
                    mapDispatchToProps,
                )(Sidebar);
                
