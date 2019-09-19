import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { from, isFromActive } = this.props;
        return (
            <>
                <div className="page-title-box">
                    {
                        isFromActive && (
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to={'/'}> Anasayfa </Link></li>
                                    <li className="breadcrumb-item active">{from}</li>
                                </ol>
                            </div>
                        )
                    }
                    <h4 className="page-title">{from}</h4>
                </div>
            </>
        );
    }
}

Breadcrumb.propTypes = {
    from: PropTypes.any.isRequired,
    isFromActive: PropTypes.bool.isRequired
};
Breadcrumb.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Breadcrumb);
