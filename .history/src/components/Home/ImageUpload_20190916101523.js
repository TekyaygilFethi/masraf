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
            imageUrl: 'url(' + e.base64 + ')'
        })

    }


    render() {
        debugger;
        return (
            <div className="row" style={{ backgroundImage: this.state.imageUrl, backgroundSize: '100% auto', width: '100%', height: '450px', justifyContent: 'center', alignItems: 'center' }}>
                <ReactFileReader fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" >Resim yükle</Button>
                </ReactFileReader>
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
