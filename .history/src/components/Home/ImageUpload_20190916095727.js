import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button } from '@material-ui/core/index';





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
            <div className="row">
                <div className="col-sm-3">
                    <ReactFileReader fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                        <Button variant="outlined" >Resim yükle</Button>
                    </ReactFileReader>
                </div>
                <div className="col-sm-9">

                    <img src={this.state.imageUrl}></img>
                </div>
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
