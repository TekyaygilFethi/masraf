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
            <div className="nav-wrapper">
                <Navbar>
                    <Nav>
                        <NavItem>
                            qweqw
                    <NavLink to="/">asdasd</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">asdasd</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">asdasd</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">asdasd</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>


            </div>
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

