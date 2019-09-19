import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: {},
        };
    }


    render() {
        return (
            <>
                <div className="card">
                    <div class="card-widgets">
                        <a href="javascript: void(0);" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                        <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-minus"></i></a>
                        <a href="javascript: void(0);" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                    </div>
                </div>
            </>
        );
    }
}

PersonalInfo.propTypes = {
};
PersonalInfo.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonalInfo);
