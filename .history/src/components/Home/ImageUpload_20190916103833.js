import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button } from '@material-ui/core/index';
import { height } from '@material-ui/system';
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
                <div className="col-sm-12">
                    <div className="card-box text-center">
                        {
                            !_.isEmpty(this.state.imageUrl) && (
                                <img src={this.state.imageUrl} className="rounded-circle avatar-lg img-thumbnail" alt={this.state.imageTitle} />
                            )
                        }

                        <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                            <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                        </ReactFileReader>
                    </div>
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




