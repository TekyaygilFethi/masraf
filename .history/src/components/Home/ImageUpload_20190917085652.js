import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Paper, Button, Stepper, Step, StepLabel, StepContent, Typography, Popover, MobileStepper } from '@material-ui/core/index';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons/index';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import _ from 'lodash';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: '', imageTitle: '', activeStep: 0, open: false, anchorEl: null, hoverImage: null, activeImageStep: 0 };

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handleImageListDeleteItem = this.handleImageListDeleteItem.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleImageNext = this.handleImageNext.bind(this);
        this.handleImageBack = this.handleImageBack.bind(this);
    }

    getSteps() {
        return ['Resim Yükle', 'Onayla', 'Resim işleme'];
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return `Masraf fişinizi sisteme yükleyiniz.`;
            case 1:
                return 'Masraf fişinizi onaylayınız.Bu onaylama işleminden sonra masraf fişiniz sisteme kayıt edilecektir.';
            case 2:
                return `Fişiniz sistem tarafından taranıyor. Lütfen bekliyiniz.`;
            default:
                return 'Unknown step';
        }
    }

    //Bir sonraki adıma geçmek için 
    handleNext() {
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
            total.push({ id: i, url: e.base64[i], name: item.name })
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
        if (newUploadImageList.lenght === 0) {
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

    handleImageNext() {
        this.setState({
            activeImageStep: this.state.activeStep + 1
        })
    }

    handleImageBack() {
        this.setState({
            activeImageStep: this.state.activeStep - 1
        })
    }

    handleStepChange(step) {
        this.setState({
            activeImageStep: step
        })
    }


    render() {
        const { activeStep, open, anchorEl, uploadImageList, hoverImage, activeImageStep } = this.state;

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
                                                        variant="contained" color="primary" onClick={this.handleNext}> Onaylıyorum
                                                    </Button>

                                                </>
                                            )
                                        }
                                        {
                                            activeStep === 2 && (
                                                <>
                                                    <Button onClick={this.handleBack}>Geri</Button>
                                                    <Button
                                                        variant="contained" color="primary" onClick={this.handleNext}> Bekleyiniz
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

                                                    <Paper square elevation={0} style={{ display: 'flex', alignItems: 'center', height: 50, paddingLeft: 4, }}>
                                                        <Typography>{uploadImageList[activeStep].name}</Typography>
                                                    </Paper>
                                                    <AutoPlaySwipeableViews
                                                        axis={'x'}
                                                        index={activeStep}s
                                                        onChangeIndex={this.handleStepChange}
                                                        enableMouseEvents
                                                    >
                                                        {uploadImageList.map((step, index) => (
                                                            <div key={step.label}>
                                                                {Math.abs(activeStep - index) <= 2 ? (
                                                                    <img style={{ height: 255, display: 'block', maxWidth: 400, overflow: 'hidden', width: '100%', }} src={step.imgPath} alt={step.label} />
                                                                ) : null}
                                                            </div>
                                                        ))}
                                                    </AutoPlaySwipeableViews>

                                                    <MobileStepper
                                                        steps={uploadImageList.lenght}
                                                        position="static"
                                                        variant="text"
                                                        activeStep={activeImageStep}
                                                        nextButton={
                                                            <Button size="small" onClick={this.handleImageNext} disabled={activeImageStep === uploadImageList.lenght - 1}>
                                                                Next <KeyboardArrowRight />
                                                            </Button>
                                                        }
                                                        backButton={
                                                            <Button size="small" onClick={this.handleImageBack} disabled={activeImageStep === 0}>
                                                                <KeyboardArrowLeft />
                                                                Back
                                                            </Button>
                                                        }
                                                    />

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


