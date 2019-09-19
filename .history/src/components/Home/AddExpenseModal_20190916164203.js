import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Tab, Tabs, Typography, Box, Dialog, MobileStepper, Button } from '@material-ui/core/index';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons/index';
import { setModalToggle } from '../../redux/modules/modal';

import ImageUpload from './ImageUpload'
import ExpenseForm from '../Form/ExpenseForm';
import validate from '../Form/ExpenseForm/validate';


const arasrar = [{ documentDate: "asdasd" }, { documentDate: "asdasd2" }, { documentDate: "asdasd3" },]

class AddExpenseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tabIndexValue: 0,
            activeStep: 0,
            steps: 6,
            formData: {

            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeTabIndex = this.handleChangeTabIndex.bind(this);
        this.handleNextStep = this.handleNextStep.bind(this);
        this.handleBackStep = this.handleBackStep.bind(this);
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


    handleNextStep() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }
    handleBackStep() {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        result.open = nextProps.modal.modalToggle;
        return result;
    }


    render() {

        const { open, tabIndexValue, activeStep, steps } = this.state;

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

                                    <MobileStepper
                                        steps={steps}
                                        position="static"
                                        variant="text"
                                        activeStep={activeStep}
                                        nextButton={
                                            <Button size="small" onClick={this.handleNextStep} disabled={activeStep === steps - 1}>
                                                Next<KeyboardArrowRight />
                                            </Button>
                                        }
                                        backButton={
                                            <Button size="small" onClick={this.handleBackStep} disabled={activeStep === 0}>
                                                <KeyboardArrowLeft />
                                                Back
                                        </Button>
                                        }
                                    />

                                    <ExpenseForm form={`form-${activeStep}`} key={activeStep} onSubmit={this.handleSubmit} initialValues={arasrar[activeStep]} />
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