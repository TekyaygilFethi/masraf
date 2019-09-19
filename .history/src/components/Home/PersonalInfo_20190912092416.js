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
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={6} className="pr-3 pl-1">
                                    <TextField
                                        id="standard-name"
                                        label="Name"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6} className="pr-1 pl-3">
                                    <TextField
                                        id="standard-name"
                                        label="Name"
                                        margin="normal"
                                        fullWidth
                                    /></Grid>
                            </Grid>
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
