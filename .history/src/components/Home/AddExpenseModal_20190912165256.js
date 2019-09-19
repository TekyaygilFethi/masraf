import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Backdrop, Modal } from '@material-ui/core/index';

import { setModalToggle } from '../../redux/modules/modal';

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
        };
    }

    handleClose() {
        this.props.setModalToggle(false)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const result = {};
        result.open = nextProps.modal.modalToggle;
        return result;
    }


    render() {

        const { open } = this.state;

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
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 id="transition-modal-title">Transition modal</h2>
                                <p id="transition-modal-description">react-transiton-group animates me.</p>
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
    modal: state.modal
});
const mapDispatchToProps = {
    setModalToggle
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddExpenseModal);
