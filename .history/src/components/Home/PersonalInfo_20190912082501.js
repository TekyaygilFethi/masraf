import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core/index';




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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<i className="fa fa-user" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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
