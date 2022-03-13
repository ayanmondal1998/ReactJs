import React, { useState } from 'react'
import './Front.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Seizure of membership', 'Entering the Retirement Contract', 'Signature of the Electronic Signature Convention', 'Electronic signature of contract documents'];

function FrontPageComponent() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const apiString = "https://cpd-cp4ba.itzroks-6610032xdk-5557c7-4b4a324f027aea19c5cbc0c3275c4656-0000.eu-de.containers.appdomain.cloud/bas/rest/bpm/wle/v1/process?action=start&bpdId=25.e3733987-7f61-411e-8814-5312d086f206&snapshotId=2064.4c5b5f04-1b0f-458c-ae3e-47586e5b4f6b&branchId=2063.351126a1-27a7-4e61-b199-5f09a9d2d850&processAppId=2066.58e02919-b671-4591-bcdf-f04735e6859d&parts=all"

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

 const [selectedFile, setSelectedFile] = useState([])

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {

    console.log("handleUpload", selectedFile);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data'},
      body: selectedFile};  

      fetch( "http://courriertem.northeurope.cloudapp.azure.com/SignApi/SignRequest?userName=laboris Lorem sunt pariatur cupidatat" , requestOptions)
    //fetch('https://reqres.in/api/register', requestOptions)
        .then(async response => {


          const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log(data)


        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });



    }

  


  const handleContinue = () => {
    console.log("handleContinue");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + ('cp4admin:PVIoVshuU9TprWUlBHan') },
      body: JSON.stringify({ "corporateAgent": {
        "gsm": "",
        "firstName": "",
        "role": "",
        "nationality": "",
        "name": "",
        "CIN": "",
        "tel": "",
        "startdate": "2022-03-08T08:32:06.343Z",
        "email": "",
        "effectiveDate": "2022-03-08T08:32:06.343Z"
      },
      "accountManager": {
        "GSM": "",
        "role": "",
        "nationality": "",
        "FirstName": "",
        "CIN": "",
        "tel": "",
        "email": "",
        "Name": ""
      },
      "retirmentContract": {
        "naturePlate": "",
        "salaryShare": "",
        "product": "",
        "salaryMass": "",
        "enrollementBillDate": "2022-03-08T08:32:06.343Z",
        "categoryNumber": "",
        "headCount": "",
        "empShare": "",
        "option": ""
      },
      "document": [
        {
          "createdDate": "2022-03-08T08:32:06.344Z",
          "documentLink": "",
          "documentID": "",
          "comment": "",
          "documentName": ""
        }
      ],
      "payment": {
        "bank": "",
        "paymentMethod": "",
        "account": ""
      },
      "delegates": {
        "role": "",
        "nationality": "",
        "CIN": "",
        "startDate": "",
        "effectiveDate": "",
        "Name": ""
      },
      "applicaitonID": 0,
      "generalInfromation": {
        "address": {
          "addressNo": "",
          "city": "",
          "street": "",
          "postalcode": ""
        },
        "activity": "",
        "ICEno": "",
        "bussinessName": "",
        "CNSSNo": "",
        "creationDate": "2022-03-08T08:32:06.343Z",
        "legalForm": "",
        "bussinessTaxNo": "",
        "equityCapital": "",
        "tel": "",
        "rc_no": "",
        "IFno": "",
        "fax": "",
        "rc_locality": ""
      } })
    };
    
    fetch(apiString, requestOptions)
    //fetch('https://reqres.in/api/register', requestOptions)
        .then(async response => {


          const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log(data)


        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

  }


  const handleReset = () => {
    setActiveStep(0);
  };
  return (

    <div className='pt-2'>
      <div className="card-header card-header-flex align-items-center border-bottom">
        <div className="d-flex flex-column justify-content-center mr-auto">
          <div className="d-flex flex-row justify-content-center">
            <div className="row pt-2" style={{ width: '100%', backgroundColor: '#f0f9f0', height: '6223x' }}>
              <div className="row" style={{ margin: '0px 140px 0px 140px', backgroundColor: 'white', height: '623px' }}>
                <div className="row" style={{ height: '60px' }} >
                  <table>
                    <tr>
                      <td>
                        <img style={{ marginLeft: '70px' }} src="cimr-logo.png"></img>
                      </td>
                      <td>
                        <h4 style={{ marginLeft: '200px' }}>WELL PREPARED RETREAT, FUTURE ASSURES!</h4>
                      </td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td>
                        <h5 style={{ marginLeft: '260px', color: 'grey' }}>STEPS IN THE CIMR. RETIREMENT CONTRACT MEMBERSHIP AND SUBSCRIPTION PROCESS</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 style={{ margin: ' 0px 0px 0px 230px', color: 'grey' }}>Simply complete your membership and subscribe to an online CIMR. retirement contract in 4 steps</h6>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="row" style={{ margin: ' 130px 0px 0px 0px', backgroundColor: '#f3f0f0', height: '330px' }}>
                  <table>
                    <tr>
                      <tr>
                        {/* <table>
                          <tr>
                            <td>
                              <div style={{ margin: ' 25px 0px 0px 55px', height: '30px', width: '30px', backgroundColor: 'white', borderRadius: '50%' }}>1</div>
                              <div style={{ margin: ' -35px 0px 0px 71px', backgroundColor: 'grey', height: '130px', width: '200px' }}>
                                <h6 style={{ padding: '60px 0px 0px 15px' }}>Seizure of membership</h6>
                              </div>
                            </td>
                            <td>
                              <div style={{ margin: ' 25px 0px 0px 35px', height: '30px', width: '30px', backgroundColor: 'white', borderRadius: '50%' }}>2</div>
                              <div style={{ margin: ' -35px 0px 0px 51px', backgroundColor: 'grey', height: '130px', width: '200px' }}>
                                <h6 style={{ padding: '60px 0px 0px 15px' }}>Entering the Retirement Contract</h6>
                              </div>
                            </td>
                            <td>
                              <div style={{ margin: ' 25px 0px 0px 35px', height: '30px', width: '30px', backgroundColor: 'white', borderRadius: '50%' }}>3</div>
                              <div style={{ margin: ' -35px 0px 0px 51px', backgroundColor: 'grey', height: '130px', width: '200px' }}>
                                <h6 style={{ padding: '45px 0px 0px 15px' }}>Signature of the Electronic Signature Convention and submission of the file to the ICRC </h6>
                              </div>
                            </td>
                            <td>
                              <div style={{ margin: ' 25px 0px 0px 35px', height: '30px', width: '30px', backgroundColor: 'white', borderRadius: '50%' }}>4</div>
                              <div style={{ margin: ' -35px 0px 0px 51px', backgroundColor: 'grey', height: '130px', width: '200px' }}>
                                <h6 style={{ padding: '60px 0px 0px 15px' }}>Electronic signature of contract documents</h6>
                              </div>
                            </td>
                          </tr>
                        </table> */}





                        <Box sx={{ width: '100%', backgroundColor: '#8b9194' }}>
                          <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                              const stepProps = {};
                              const labelProps = {};
                              if (isStepOptional(index)) {
                                labelProps.optional = (
                                  <Typography variant="caption">Optional</Typography>
                                );
                              }
                              if (isStepSkipped(index)) {
                                stepProps.completed = false;
                              }
                              return (
                                <Step key={label} {...stepProps}>
                                  <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                              );
                            })}
                          </Stepper>
                          {activeStep === steps.length ? (
                            <React.Fragment>
                              <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                              </Typography>
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset} sx={{ backgroundColor: "#1976d2" }}>Reset</Button>
                              </Box>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>

                              {activeStep === 0 ? (

                                <div style={{ margin: ' 25px 0px 0px 25px', height: '615px', width: '1010px', backgroundColor: '#d7e3d6', borderRadius: '1%' }} >
                                  <div>
                                    <h4 style={{ margin: '10px 0px 0px 0px' }}>Please download the supporting documents below and complete the missing information</h4>
                                  </div>
                                  <table>
                                    <tr>
                                      <td style={{ padding: '15px 0px 0px 285px', width: '30px' }}>
                                        <tr>
                                          <td><span style={{ float: 'left' }}>Business Register</span></td>
                                        </tr>
                                        <tr>
                                          <td><input style={{ float: 'left' }} type="file" onChange={onFileChange} /></td>
                                        </tr>
                                      </td>
                                      <td style={{ padding: '15px 0px 0px 0px' }}>
                                        <tr>
                                          <td><span style={{ float: 'left' }}>ICE certificate</span></td>
                                        </tr>
                                        <tr>
                                          <td><input style={{ float: 'left' }} type="file" /></td>
                                        </tr>
                                      </td>
                                    </tr>
                                  </table>
                                  <button style={{ margin: '25px 0px 0px 0px', backgroundColor: '#73b845', borderRadius: '3px', width: '100px', height: '30px' }} onClick={handleUpload}>Upload</button>
                    
                                  <h3>OR</h3>

                                  <div>
                                    <h4 style={{ margin: '10px 0px 0px 0px' }}>Fill out the identification form below directly</h4>
                                  </div>
                                  <div>
                                    <table>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Business name : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Legal form : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>RC No. : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>RC Locality : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}><h4><u>Address</u></h4></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>No. : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Street : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Postal code: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>City : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Headquarters Address: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>City : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>ICE NO.: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>IF NO : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>CNSS No. : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Business Tax No. </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Equity Capital: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Creation date: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Activity: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Under Activity : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>
                                      <tr>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Tel: </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                        <td style={{ padding: '10px 0px 0px 30px', fontFamily: 'none' }}>Fax : </td>
                                        <td><input type='text' style={{ margin: '10px 0px 0px 0px' }} /></td>
                                      </tr>

                                    </table>
                                  </div>
                                </div>



                              ) : (
                                activeStep === 1 ? (
                                  <Typography sx={{ mt: 2, mb: 1 }}>Step 2</Typography>
                                ) : (
                                  <Typography sx={{ mt: 2, mb: 1 }}>Step 3</Typography>
                                )
                              )}







                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button


                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                  sx={{ mr: 1, backgroundColor: "#1976d2", color: "White" }}
                                >
                                  Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                  <Button onClick={handleSkip} sx={{ mr: 1, backgroundColor: "#1976d2", color: "White" }}>
                                    Skip
                                  </Button>
                                )}

                                <Button onClick={handleNext} sx={{ color: "White", backgroundColor: "#1976d2" }}>
                                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                              </Box>
                            </React.Fragment>
                          )}
                        </Box>
                      </tr>
                    </tr>
                  </table>
                  <div>
                    <h5>You can apply to join and subscribe to a CIMR. pension contract online by clicking next</h5>
                  </div>
                  <div className="row" style={{ margin: '100px 0px 0px 0px', backgroundColor: '#f3a922', height: '70px' }}>
                    <button style={{ margin: '25px 0px 0px 0px', backgroundColor: '#73b845', borderRadius: '3px', width: '100px', height: '30px' }}>Cancel</button>
                    <button style={{ margin: '25px 0px 0px 30px', backgroundColor: '#73b845', borderRadius: '3px', width: '100px', height: '30px' }} onClick={handleContinue} >Continue</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FrontPageComponent