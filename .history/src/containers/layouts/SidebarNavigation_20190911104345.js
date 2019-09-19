import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);



class SidebarNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
            >
                <b>Main content</b>
                <p>
                    React Sidebar is a sidebar component for React. It offers the
                    following features:
            </p>
                <ul>
                    <li>Have the sidebar slide over main content</li>
                    <li>Dock the sidebar next to the content</li>
                    <li>Touch enabled: swipe to open and close the sidebar</li>
                    <li>
                        Easy to combine with media queries for auto-docking (
                <a href="responsive_example.html">see example</a>)
              </li>
                    <li>
                        Sidebar and content passed in as PORCs (Plain Old React
                        Components)
              </li>
                    <li>
                        <a href="https://github.com/balloob/react-sidebar">
                            Source on GitHub
                </a>{" "}
                        (MIT license)
              </li>
                    <li>Only dependency is React</li>
                </ul>
                <p>
                    <a href="https://github.com/balloob/react-sidebar#installation">
                        Instructions how to get started.
              </a>
                </p>
                <p>
                    <b>Current rendered sidebar properties:</b>
                </p>
            </Sidebar>
        )
    }
}

SidebarNavigation.propTypes = {
};
SidebarNavigation.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SidebarNavigation);

