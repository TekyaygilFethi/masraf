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
                docked={this.state.sidebarOpen}
            >
                <button onClick={this.onSetSidebarOpen}>asdasd</button>
                {this.props.children}
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

