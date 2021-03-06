import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button, Stepper, Step, StepLabel, StepContent, Typography,Popover,Icon } from '@material-ui/core/index';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import _ from 'lodash';




class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrl: '', imageTitle: '', activeStep: 0 ,open:false,anchorEl:null};

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.getSteps = this.getSteps.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
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
        this.setState({
            imageUrl: e.base64,
            imageTitle: e.fileList[0].name,
            activeStep: this.state.activeStep + 1
        })

    }

    //Resmin detayindan çıkmak için
    handlePopoverClose(){
        this.setState({
            open:false,
            anchorEl:null
        })
    }

    //Resmin üzerine gelince detaylı göstermek için
    handlePopoverOpen(e){
        this.setState({
            open:true,
            anchorEl:e.currentTarget
        })
    }


    render() {
        const { activeStep,open,anchorEl } = this.state;

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
                                            activeStep===0 &&
                                            (
                                                <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                                                    <Button variant="contained" color="primary" >Resim yükl  <CloudUploadIcon style={{marginLeft:'0px'}} /></Button>
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
                                                 <img  
                                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                                    aria-haspopup="true"
                                                    onMouseEnter={this.handlePopoverOpen}  
                                                    src={this.state.imageUrl} 
                                                    className="roundeds avatar-lg img-thumbnail float-right" 
                                                    alt={this.state.imageTitle} />                                            
                                            
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
                                                    <img 
                                                        src={this.state.imageUrl} 
                                                        className="roundeds avatar-xxxl img-thumbnail float-right" 
                                                        alt={this.state.imageTitle} />
                                                </Popover>
                                           </> 
                                           )
                                        }
                                        {
                                            activeStep===2 &&(
                                                <>
                                                <Button onClick={this.handleBack}>Geri</Button>
                                                <Button
                                                    variant="contained" color="primary" onClick={this.handleNext}> Bekleyiniz
                                                </Button>   
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
                
                
                
                
                
                
                /*
                
                
{
                    !_.isEmpty(this.state.imageUrl) && (
                        <img src={this.state.imageUrl} className="roundeds avatar-lg img-thumbnail" alt={this.state.imageTitle} />
                    )
                }

                <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                </ReactFileReader>*/