import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Sidebar from "react-sidebar";
import SidebarContent from './SidebarContent'

const mql = window.matchMedia(`(min-width: 800px)`);


class SidebarNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: !this.state.sidebarOpen });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        result.sidebarOpen = nextProps.sidebarOpen;
        return result;
    }

    render() {
        return (
            <Sidebar
                sidebar={<SidebarContent />}
                docked={this.state.sidebarOpen}
            >
                <button onClick={this.mediaQueryChanged}>asdasd</button>
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

