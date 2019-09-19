import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';


class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: "" };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictureDataURLs
        });

    }

    render() {
        return (
            <>
                <ImageUploader
                    withPreview={true}
                    withIcon={true}
                    buttonText='Resim yükle'
                    label=''
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
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
