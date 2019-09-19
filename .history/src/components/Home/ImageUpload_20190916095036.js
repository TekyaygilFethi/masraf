import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button } from '@material-ui/core/index';





class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(e) {

        debugger;

    }


    render() {
        return (
            <>
                <ReactFileReader fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="outlined" >Resim yükle</Button>
                </ReactFileReader>
            </>
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
