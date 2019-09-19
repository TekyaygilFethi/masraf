import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Nav>

            </Nav>
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

