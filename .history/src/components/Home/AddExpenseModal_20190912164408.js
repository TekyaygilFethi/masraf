import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Fade, Backdrop, Modal } from '@material-ui/core/index';

const modal = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


class AddExpenseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: {},
        };
    }


    render() {
        return (
            <>
                <div className="row">
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        style={modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title">Transition modal</h2>
                                <p id="transition-modal-description">react-transiton-group animates me.</p>
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </>
        );
    }
}

AddExpenseModal.propTypes = {
};
AddExpenseModal.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddExpenseModal);
