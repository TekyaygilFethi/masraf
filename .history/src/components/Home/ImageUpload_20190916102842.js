import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button } from '@material-ui/core/index';
import { height } from '@material-ui/system';
import _ from 'lodash';




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
                <ReactFileReader className="row" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                </ReactFileReader>
                {
                    !_.isEmpty(this.state.imageUrl) && (
                        <img src={this.state.imageUrl} className="rounded mx-auto d-block img-thumbnail" alt={"asdas"} />
                    )
                }
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
