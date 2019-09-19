import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Navbar fluid inverse >

                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">User Name</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Navbar.Text >
                            <Navbar.Link href="#"></Navbar.Link>
                            <Navbar.Link href="#"></Navbar.Link>
                        </Navbar.Text>
                        <Nav>
                            <NavDropdown eventKey={1} title="Item 1">
                                <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2}>Item 2</NavItem>
                            <NavItem eventKey={3}>Item 3</NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </>

        )
    }
}

export default Layout;
