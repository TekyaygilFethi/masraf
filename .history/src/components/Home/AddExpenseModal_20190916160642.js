import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Tab, Tabs, Typography, Box, Dialog } from '@material-ui/core/index';

import { setModalToggle } from '../../redux/modules/modal';

import ImageUpload from './ImageUpload'
import ExpenseForm from '../Form/ExpenseForm';



class AddExpenseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tabIndexValue: 0,
            formData: {

            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeTabIndex = this.handleChangeTabIndex.bind(this);
    }

    handleChangeTabIndex = (event, tabIndexValue) => {
        this.setState({ tabIndexValue })
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    handleClose = () => {
        this.props.setModalToggle(false)
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        result.open = nextProps.modal.modalToggle;
        return result;
    }


    render() {

        const { open, tabIndexValue } = this.state;

        return (
            <>
                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={open}
                    onClose={this.handleClose}

                    aria-labelledby="max-width-dialog-title"
                >

                    <Fade in={open}>
                        <div className="card">
                            <div className="card-body">
                                <Tabs
                                    value={tabIndexValue}
                                    onChange={this.handleChangeTabIndex}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                >
                                    <Tab label="Fiş yükleyerek masraf oluştur." />
                                    <Tab label="Elle girerek masraf oluştur." />
                                </Tabs>
                                <TabPanel value={tabIndexValue} index={0}>
                                    <ImageUpload />
                                </TabPanel>
                                <TabPanel value={tabIndexValue} index={1}>


                                    <ExpenseForm form="1" onSubmit={this.handleSubmit} />
                                    <ExpenseForm form="2" onSubmit={this.handleSubmit} />
                                    <ExpenseForm form="3" onSubmit={this.handleSubmit} />




                                </TabPanel>
                            </div>
                        </div>
                    </Fade>
                </Dialog>
            </>
        );
    }
}

AddExpenseModal.propTypes = {
    setModalToggle: PropTypes.func.isRequired,
};
AddExpenseModal.defaultProps = {};

const mapStateToProps = state => ({
    modal: state.modal,
    form: state.form,
});
const mapDispatchToProps = {
    setModalToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddExpenseModal);



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`idecon-panel-${index}`}
            aria-labelledby={`idecon-tab-${index}`}
            {...other}
        >
            <Box p={1}>{children}</Box>
        </Typography>
    )
}