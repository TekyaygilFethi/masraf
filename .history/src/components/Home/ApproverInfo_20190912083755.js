import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core/index';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class ApproverInfo extends Component {
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
                    <ExpansionPanel defaultExpanded={true}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
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

ApproverInfo.propTypes = {
};
ApproverInfo.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ApproverInfo);
