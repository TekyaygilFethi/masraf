import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button, Stepper, Step, StepLabel, StepContent } from '@material-ui/core/index';
import _ from 'lodash';




class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: '', imageTitle: '' };

        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(e) {
        this.setState({
            imageUrl: e.base64,
            imageTitle: e.fileList[0].name
        })

    }


    render() {
        return (
            <div className="row">

            </div>
        );
    }
}

ImageUpload.propTypes = {
};
ImageUpload.defaultProps = {};

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageUpload);

/*


{
    !_.isEmpty(this.state.imageUrl) && (
        <img src={this.state.imageUrl} className="roundeds avatar-lg img-thumbnail" alt={this.state.imageTitle} />
    )
}

<ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
</ReactFileReader>*/