import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    s
    render() {
        return (
            <>
                <ReactFileReader fileTypes={[".csv", ".zip"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                    <button className='btn'>Upload</button>
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
