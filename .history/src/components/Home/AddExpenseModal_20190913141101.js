import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Backdrop, Modal, Tab, Tabs } from '@material-ui/core/index';

import { setModalToggle } from '../../redux/modules/modal';




import ExpenseForm from '../Form/ExpenseForm';



const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


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
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={modalStyle}
                    open={open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className="card">
                            <div className="card-body">
                                <Tabs
                                    value={tabIndexValue}
                                    onChange={this.handleChangeTabIndex}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Fiş yükleyerek masraf oluştur." />
                                    <Tab label="Elle girerek masraf oluştur." />
                                </Tabs>


                                <ExpenseForm onSubmit={this.handleSubmit} />

                            </div>
                        </div>
                    </Fade>
                </Modal>
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



function TabPanel = (props) => {
    const { chilren, value, index, ...props } = props;
}