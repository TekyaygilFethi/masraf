import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
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
                <div className="card" id="personalInfo">
                    <ExpansionPanel defaultExpanded={true}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography><FormattedMessage id="home.personalInfo.header" /></Typography>
                        </ExpansionPanelSummary>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="full-name"
                                    label={<FormattedMessage id="home.personalInfo.fullName" />}
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="date"
                                    label={<FormattedMessage id="home.personalInfo.date" />}
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="title"
                                    label={<FormattedMessage id="home.personalInfo.title" />}
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="area"
                                    label={<FormattedMessage id="home.personalInfo.area" />}
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-6">
                                <TextField
                                    id="personal-no"
                                    label={<FormattedMessage id="home.personalInfo.no" />}
                                    margin="normal"
                                    fullWidth
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextField
                                    id="place"
                                    label={<FormattedMessage id="home.personalInfo.place" />}
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
