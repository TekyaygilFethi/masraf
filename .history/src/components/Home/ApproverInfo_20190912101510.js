import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField } from '@material-ui/core/index';

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
                            <Typography><FormattedMessage id="home.approverInfo.header" /></Typography>
                        </ExpansionPanelSummary>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                        </div>
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
