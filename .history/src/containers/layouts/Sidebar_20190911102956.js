import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Nav, NavDropdown, Navbar, NavItem, } from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
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

