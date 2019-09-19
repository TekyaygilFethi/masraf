import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, TextField } from '@material-ui/core/index';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
                    <ExpansionPanel defaultExpanded={true}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Expansion Panel 1</Typography>
                        </ExpansionPanelSummary>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="full-name"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="date"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="full-name"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="date"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="full-name"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="date"
                                    label="Name"
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                        </div>
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
