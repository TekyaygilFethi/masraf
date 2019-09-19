import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Sidebr from "react-sidebar";



class Sidebar extends Component {
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

