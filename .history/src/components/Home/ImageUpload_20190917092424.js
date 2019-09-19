import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button, Stepper, Step, StepLabel, StepContent, Typography, Popover } from '@material-ui/core/index';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import _ from 'lodash';



class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: '', imageTitle: '', activeStep: 0, open: false, anchorEl: null, hoverImage: null };

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleImageComplete = this.handleImageComplete.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handleImageListDeleteItem = this.handleImageListDeleteItem.bind(this);
    }

    getSteps() {
        return ['Resim Yükle', 'Onayla'];
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return `Masraf fişinizi sisteme yükleyiniz.`;
            case 1:
                return 'Masraf fişinizi onaylayınız.Bu onaylama işleminden sonra masraf fişiniz sisteme kayıt edilecektir.';
            default:
                return 'Unknown step';
        }
    }

    uuid() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) +
            Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    //Bir sonraki adıma geçmek için 
    handleImageComplete() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    //Bir önceki adıma geçmek için 
    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }

    // Resim yüklemek için geriye base64 dönüyor ve 2.adıma geçiriyor
    handleUploadFile(e) {
        let uploadImageList = Object.keys(e.fileList).reduce((total, item, i) => {
            total.push({ id: this.uuid(), url: e.base64[i], name: item.name })
            return total;
        }, []);


        this.setState({
            uploadImageList: uploadImageList,
            activeStep: this.state.activeStep + 1
        });
    }

    //Resim listesinden resim silmek için kulanılıyor
    handleImageListDeleteItem(id) {
        const newUploadImageList = this.state.uploadImageList.filter(x => x.id !== id)

        debugger;
        if (newUploadImageList.length === 0) {
            this.handleBack()
        } else {
            this.setState({ uploadImageList: newUploadImageList })
        }

    }

    //Resmin detayindan çıkmak için
    handlePopoverClose() {
        this.setState({
            open: false,
            anchorEl: null
        })
    }

    //Resmin üzerine gelince detaylı göstermek için
    handlePopoverOpen(item, e) {
        this.setState({
            open: true,
            anchorEl: e.currentTarget,
            hoverImage: item

        })
    }


    render() {
        const { activeStep, open, anchorEl, uploadImageList, hoverImage } = this.state;

        return (
            <div className="row">
                <Stepper activeStep={activeStep} orientation="vertical" className="w-100">
                    {
                        this.getSteps().map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{this.getStepContent(index)}</Typography>
                                    <div className="m-1 w-100">
                                        {
                                            activeStep === 0 &&
                                            (
                                                <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={true} handleFiles={this.handleUploadFile}>
                                                    <Button variant="contained" color="primary" >Resim yükle   <CloudUploadIcon style={{ marginLeft: '5px' }} /></Button>
                                                </ReactFileReader>
                                            )
                                        }
                                        {
                                            activeStep === 1 && (
                                                <>
                                                    <Button onClick={this.handleBack}>Geri</Button>
                                                    <Button
                                                        variant="contained" color="primary" onClick={this.handleImageComplete}> Onaylıyorum
                                                    </Button>

                                                </>
                                            )
                                        }

                                    </div>
                                    <div>
                                        {
                                            activeStep === 1 && (
                                                <>
                                                    {
                                                        uploadImageList.map((item, i) =>
                                                            <div className="img-wraps m-1">
                                                                <span class="closes" onClick={() => this.handleImageListDeleteItem(item.id)}>&times;</span>
                                                                <img
                                                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                                                    aria-haspopup="true"
                                                                    onClick={(e) => this.handlePopoverOpen(item, e)}
                                                                    src={item.url}
                                                                    className="rounded avatar-lg img-thumbnail float-right "
                                                                    alt={item.name} />
                                                            </div>
                                                        )
                                                    }

                                                    <Popover
                                                        open={open}
                                                        anchorEl={anchorEl}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        onClose={this.handlePopoverClose}
                                                        disableRestoreFocus
                                                    >
                                                        {
                                                            !_.isNull(hoverImage) && (
                                                                <img
                                                                    src={hoverImage.url}
                                                                    className="rounded avatar-xxxl img-thumbnail float-right"
                                                                    alt={hoverImage.name} />
                                                            )
                                                        }

                                                    </Popover>

                                                </>
                                            )
                                        }
                                    </div>
                                </StepContent>
                            </Step>
                        ))
                    }
                </Stepper>
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


