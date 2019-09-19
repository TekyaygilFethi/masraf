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
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={false}
                docked={this.state.sidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
            </button>
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

