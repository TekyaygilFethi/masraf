import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button } from '@material-ui/core/index';
import { height } from '@material-ui/system';





class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: '' };

        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleUploadFile(e) {
        this.setState({
            imageUrl: e.base64
        })

    }


    render() {
        return (
            <div className="row" style={{ height: '383px', justifyContent: 'center', alignItems: 'center' }}>
                <ReactFileReader fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                </ReactFileReader>

                <img src={this.state.imageUrl} className="rounded mx-auto d-block img-thumbnail" />
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
