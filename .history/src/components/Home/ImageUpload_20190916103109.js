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
            <div class="upload">
                <div class="upload-files">
                    <header>
                        <p>
                            <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                            <span class="up">up</span>
                            <span class="load">load</span>
                        </p>
                    </header>
                    <div class="body" id="drop">
                        <i class="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
                        <p class="pointer-none"><b>Drag and drop</b> files here <br /> or <a href="" id="triggerFile">browse</a> to begin the upload</p>
                        <input type="file" multiple="multiple" />
                    </div>
                    <footer>
                        <div class="divider">
                            <span><AR>FILES</AR></span>
                        </div>
                        <div class="list-files">
                        </div>
                        <button class="importar">UPDATE FILES</button>
                    </footer>
                </div>
            </div>

            <div className="row">
                <ReactFileReader className="row" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                </ReactFileReader>
                {
                    !_.isEmpty(this.state.imageUrl) && (
                        <img src={this.state.imageUrl} className="rounded mx-auto d-block img-thumbnail" alt={this.state.imageTitle} />
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
