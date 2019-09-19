import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Tab, Tabs, Typography, Box, Dialog, MobileStepper, Button } from '@material-ui/core/index';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons/index';
import { setModalToggle } from '../../redux/modules/modal';
import _ from 'lodash'
import ImageUpload from './ImageUpload'
import ExpenseForm from '../Form/ExpenseForm';
import { Field, FieldArray, reduxForm, arrayPush } from 'redux-form';

import { setUploadImageList } from '../../redux/modules/uploadImageList';
import { setActiveTabIndexValue } from '../../redux/modules/tabActiveIndexValue';

class AddExpenseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tabIndexValue: 0,
            activeStep: 0,
            uploadImageList: null,
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
        this.props.setActiveTabIndexValue(tabIndexValue)
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    handleClose = () => {
        this.props.setModalToggle(false)
        this.props.setUploadImageList()
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
        debugger
        if (prevState.uploadImageList !== nextProps.uploadImageList) {
            result.uploadImageList = nextProps.uploadImageList.data;
        }

        result.tabIndexValue = nextProps.activeIndexValue.data;
        return result;
    }


    render() {

        const { open, tabIndexValue, activeStep, uploadImageList } = this.state;

        debugger;
        if (_.isUndefined(uploadImageList)) {
        } else {
            this.props.pushArray("ExpenseForm", "contents", "")
        }


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

                                    <ExpenseForm onSubmit={this.handleSubmit} />
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
    setUploadImageList: PropTypes.func.isRequired,
    setActiveTabIndexValue: PropTypes.func.isRequired,
};
AddExpenseModal.defaultProps = {};

const mapStateToProps = state => ({
    modal: state.modal,
    form: state.form,
    uploadImageList: state.uploadImageList,
    activeIndexValue: state.activeIndexValue
});
const mapDispatchToProps = {
    setModalToggle,
    setUploadImageList,
    setActiveTabIndexValue,
    pushArray: arrayPush
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






// {
//     _.isUndefined(uploadImageList) ? (
//         <ExpenseForm onSubmit={this.handleSubmit} />
//     ) : (
//             <>
//                 <MobileStepper
//                     steps={uploadImageList.length}
//                     position="static"
//                     variant="dots"
//                     activeStep={activeStep}
//                     nextButton={
//                         <Button size="small" onClick={this.handleNextStep} disabled={activeStep === uploadImageList.length - 1}>
//                             <KeyboardArrowRight />
//                         </Button>
//                     }
//                     backButton={
//                         <Button size="small" onClick={this.handleBackStep} disabled={activeStep === 0}>
//                             <KeyboardArrowLeft />

//                         </Button>
//                     }
//                 />
//                  <ExpenseForm form={uploadImageList[activeStep].id} key={activeStep} onSubmit={this.handleSubmit} /> 
//             </>
//         )
// }