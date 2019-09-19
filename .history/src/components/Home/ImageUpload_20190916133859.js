import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import { Button, Stepper, Step, StepLabel, StepContent, Typography,Popover  } from '@material-ui/core/index';
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
s

    getSteps() {
        return ['Resim Yükle', 'Onayla', 'Resim işleme'];
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return `Masraf fişinizi sisteme yükleyiniz.`;
            case 1:
                return 'Masraf fişinizi onaylayınız.';
            case 2:
                return `Fişiniz sistem tarafından taranıyor. Lütfen bekliyiniz.`;
            default:
                return 'Unknown step';
        }
    }

    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }


    handleUploadFile(e) {
        this.setState({
            imageUrl: e.base64,
            imageTitle: e.fileList[0].name,
            activeStep: this.state.activeStep + 1
        })

    }

    handlePopoverClose(){
        this.setState({
            open:false,
            anchorEl:null
        })
    }

    handlePopoverOpen(e){
        debugger;
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
                                            activeStep===0 ?
                                            (
                                                <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                                                    <Button variant="contained" color="primary" >Resim yükle</Button>
                                                </ReactFileReader>                                                
                                            ):(
                                            <>
                                                <Button disabled={activeStep === 0} onClick={this.handleBack}>Geri</Button>
                                                <Button
                                                    variant="contained" color="primary" onClick={this.handleNext}>
                                                    {activeStep === this.getSteps().length - 1 ? 'Finish' : 'Next'}  
                                                </Button>
                                           </> 
                                           )
                                        }

                                        {
                                            activeStep===1 &&(
                                                <>
                                           
                                                 <img  aria-owns={open ? 'mouse-over-popover' : undefined}
                                                aria-haspopup="true"
                                                onMouseEnter={this.handlePopoverOpen}  src={this.state.imageUrl} className="roundeds avatar-lg img-thumbnail float-right" alt={this.state.imageTitle} />                                            
                                            
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
                                                <img src={this.state.imageUrl} className="roundeds avatar-xxxl img-thumbnail float-right" alt={this.state.imageTitle} />
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
                
                
                
                
                
                
                /*
                
                
{
                    !_.isEmpty(this.state.imageUrl) && (
                        <img src={this.state.imageUrl} className="roundeds avatar-lg img-thumbnail" alt={this.state.imageTitle} />
                    )
                }

                <ReactFileReader className="importar" fileTypes={[".jpg", ".jpeg", ".png"]} base64={true} multipleFiles={false} handleFiles={this.handleUploadFile}>
                    <Button variant="contained" color="primary" fullWidth >Resim yükle</Button>
                </ReactFileReader>*/