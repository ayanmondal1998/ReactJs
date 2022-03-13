import React from "react";
import './css/cimr_styles.css';

import './fonts/fonticons/style.css';


function SecondPage(){
    return(
        <div className="container-fluid px-0">
        
        <div id="wrapper">
           
            <header incl_html="header_innerProfile.html"></header>
           <div className="headerBG">
               <div className="container">
                 <div className="row">
                    <div className="logoImgBase">
                       <a href="#/" title="CIMR" className="logoImgBtn">
                       <img className="logoImg" src="images/logo-cimr.png"/>
                       </a>
                    </div>
                    <div className="logoHeaderBase">
                   <span className="headerTitle">WELL PREPARED RETREAT, FUTURE ASSURES!</span>
                   <a href="#/" className="headerHomeBtn"> <span className=" cimr-cimrfi-home-alt"></span> </a>
                    </div>
                 </div>
               </div>
           </div>
           
           <div className="container">
              <div className="stepProgressPanel">
                 <p className="leadTitle pt-3"  align="center">Membership of the CIMR</p>
                 <p className="subTitle "  align="center">(In Process of Entry)</p>
                 <div className="stepProgressContainer">
                    <ul className="stepProgressBar mb-3">
                       <li className="inProgress ">
                          <span className="datePara">1</span>
                          <span>Seizure of Membership</span>
                       </li>
                       <li className="initial">
                          <span className="datePara">2</span>
                          <span>Entering the Retirement Contract </span>
                       </li>
                       <li className="initial">
                          <span className="datePara">3</span>
                          <span>Signature of the Electronic Signature Convention and submission of the file to the ICRC </span>
                       </li>
                       <li className="initial">
                          <span className="datePara">4</span>
                          <span>Electronic Signature of Contract Documents</span>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="content_panel">
                 <div className="px-3">
                    <p className="innerLeadText"> Please download the supporting documents below and complete the missing information</p>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                       <div className="col">
                          <div className="card customCard">
                             <div className="card-body">
                                <h6 className="card-title">Business Register</h6>
                                <a href="#/" className="btn orangeBtn">Select your file</a>
                             </div>
                          </div>
                       </div>
                       <div className="col">
                          <div className="card customCard">
                             <div className="card-body">
                                <h6 className="card-title">ICE Certificate</h6>
                                <a href="#/" className="btn orangeBtn">Select your file</a>
                             </div>
                          </div>
                       </div>
                    </div>
                    <p className="innerLeadText mt-4"> Fill out the identification form below directly</p>
                    <div className="accCustomStyle" id="appDetails_accordion">
                       <div className="card">
                          <div className="card-header">
                             <a className="collapsed accBtn" data-bs-toggle="collapse" href="#applicationDetails">General Information <span className="fasRight"></span></a>
                          </div>
                          <div id="applicationDetails" className="collapse show" aria-labelledby="Personal Details" data-bs-parent="#appDetails_accordion">
                             <div className="card-body">
                                <div className="col-12 px-0">
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Business Name</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="" type="text" className="form-control" placeholder="Nevolys Consulting" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Legal Form</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="" type="text" className="form-control" placeholder="SARL" />
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">RC No.<span className="mandatory_txt"></span> </label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="" type="text" className="form-control" placeholder="237,999"/>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">RC Locality</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="" type="text" className="form-control" placeholder="59097000031"/>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">ICE NO.</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="street" type="text" className="form-control" placeholder="59097000031" /> 
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">IF NO.</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="Place"  type="text" className="form-control" placeholder="40397920" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">CNSS NO.</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name=""  type="text" className="form-control" placeholder="8780654" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Business Tax No.</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="State"  type="text" className="form-control" placeholder="35792197" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Creation Date</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <div className="innerCalendar">
                                                  <span className="cimr cimr-cimrfi-calendar-alt"></span>
                                                  <input id="" data-provide="datepicker" aria-label="" className="form-control " data-date-format="dd/mm/yyyy" value="" placeholder="18-05-2011" />
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Equity Capital</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="" type="text" className="form-control" placeholder="Dhs 200 000" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Activity</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="City"  type="text" className="form-control" placeholder="Advice" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Under Activity </label>
                                            </div>
                                            <div className="col-sm-7">
                                               <select className="custom-select w-100 field-text">
                                                  <option selected="selected" value="">Choose</option>
                                                  <option value=""></option>
                                                  <option value=""></option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <p className="title-p mt-1"> Business Address</p>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Address Line 1</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="street" id="primaryaddressLine1" type="text" className="form-control" /> 
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Address Line 2</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="Place" id="primaryaddressLine2" type="text" className="form-control"/>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">City</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="City" id="primaryaddressCity" type="text" className="form-control" />
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">State</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <select className="custom-select w-100 field-text" id="primaryState">
                                               <option selected="selected" value="">Select state</option>
                                                  
                                                  <option  value="XYZ">XYZ</option>
                                                  <option value="ABC">ABC</option>
                                                  <option value="ZYK">ZYK</option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Postal Code</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="Pincode" id="primaryaddressPinCode" type="text" className="form-control" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Country</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <select className="custom-select w-100 field-text" id="primaryCountry">
                                               <option selected="selected" value="">Select Country</option>
                                                  
                                                  <option  value="Moroccan">Moroccan</option>
                                                  <option value="am">America</option>
                                                  <option value="singapore">Singapore</option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-6 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="title-p col-form-label title-p">Headquarters Address </label>
                                            </div>
                                            <div className="col-sm-7 m-auto">
                                               <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked  onclick="FillAddressInput()" />
                                                  <label className="form-check-label" for="flexCheckChecked">
                                                  Same as Business Address
                                                  </label>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Address Line 1</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="street" id="secondaryaddressLine1" type="text" className="form-control" /> 
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Address Line 2</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="Place" id="secondaryaddressLine2" type="text" className="form-control" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">City</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="City" id="secondaryaddressCity" type="text" className="form-control" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">State</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <select className="custom-select w-100 field-text" id="secondaryState">
                                               <option selected="selected" value="">Select state</option>
                                                  
                                                  <option  value="XYZ">XYZ</option>
                                                  <option value="ABC">ABC</option>
                                                  <option value="ZYK">ZYK</option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Postal Code</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <input value="" name="City" id="secondaryaddressPinCode" type="text" className="form-control" />
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                         <div className="row">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Country</label>
                                            </div>
                                            <div className="col-sm-7">
                                               <select className="custom-select w-100 field-text" id="secondaryCountry">
                                                   <option selected="selected" value="">Select Country</option>
                                                  
                                                  <option  value="Moroccan">Moroccan</option>
                                                  <option value="am">America</option>
                                                  <option value="singapore">Singapore</option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="form-group row">
                                   
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB" id="multiple_1">
                                      
                                         <div className="row  multiple_section"  id="multiple_section_1">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Tel</label>
                                            </div>
                                            <div className="col-sm-7 innerAddDelBase">
                                               <div className="innerAddDel">
                                                  <div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(1);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,1);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                                                           </div> <input value="" name="telNo_1_1"  id="telNo_1_1" type="text" className="form-control" placeholder="05 22 98 11 94" /> 
                                               </div>
                                            </div>
                                         </div>
                                         
                                         
                                         <div className="row d-none">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label"></label>
                                            </div>
                                            <div className="col-sm-7 innerAddDelBase">
                                               <div className="innerAddDel">
                                                  <a href="#/" className="innerAddDelBtn"> <span className="cimr cimr-cimrfi-minus-square"></span></a>
                                                  <input value="" name="" type="text" className="form-control" placeholder="05 22 98 11 95" /> 
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col_MB" id="multiple_2">
                                         <div className="row  multiple_section"  id="multiple_section_2">
                                            <div className="col-sm-5 pr-0">
                                               <label className="label-txt col-form-label">Fax</label>
                                            </div>
                                            <div className="col-sm-7 innerAddDelBase">
                                               <div className="innerAddDel">
                                                 
<div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(2);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,2);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                                                           </div>
                                                 <input value="" name="" type="text" className="form-control" placeholder="05 22 98 17 28" /> 
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="row row-cols-1 g-4 mb-3">
                          <div className="col">
                             <div className="card customCard">
                                <div className="card-body">
                                   <p className="card-title mb-0">The signatory of the membership and pension contracts and all the contractual documents resulting therefrom must be a corporate agent (CEO, DG or DGD) (or two corporate agents in the case of joint signatures) or an authorized person having the power to do so. </p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="card">
                          <div className="card-header d-none">
                             <a className="collapsed accBtn" data-bs-toggle="collapse" href="#proftDetails"><span className="fasRight"></span></a>
                          </div>
                          <div id="proftDetails" className="collapse show" aria-labelledby="Professional Details" data-bs-parent="#appDetails_accordion">
                             <div className="card-body">
                                <div className="form-group row">
                                   <div className="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                      <div className="row p-1">
                                         <div className="col-lg-4 col-sm-5">
                                            <label className="label-txt">Please indicate your choice <span className="mandatory_txt">*</span></label>
                                         </div>
                                         <div className="col-lg-8 col-sm-7 pt-0 px-0 col_PB">
                                            <div className="form-check form-check-inline">
                                               <input className="form-check-input" type="radio" name="inlineRadioOptions" value="option1" checked="checked" />
                                               <label className="form-check-label" for="inlineRadio1"><span className="field-text">A corporate Agent</span></label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                               <input className="form-check-input" type="radio" name="inlineRadioOptions" value="option2" />
                                               <label className="form-check-label" for="inlineRadio2"><span className="field-text">Two Corporate Agents</span></label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                               <input className="form-check-input" type="radio" name="inlineRadioOptions" value="option3" />
                                               <label className="form-check-label" for="inlineRadio3"><span className="field-text">An Authorized person </span></label>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="card">
                          <div className="card-header">
                             <a className="collapsed accBtn" data-bs-toggle="collapse" href="#docDetails">Corporate Agent <span className="fasRight"></span></a>                        
                          </div>
                          <div id="docDetails" className="collapse show" aria-labelledby="Documents Details" data-bs-parent="#appDetails_accordion">
                             <div className="card-body">
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Name</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Bennani" /> 
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">First Name</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Youssef"/> 
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">CIN</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="BE717488" />
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Nationality</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <select className="custom-select w-100 field-text">
                                               <option selected="selected" value="">Moroccan</option>
                                               <option value=""></option>
                                               <option value=""></option>
                                            </select>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Function</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Managing"/> 
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Email</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Youssef.bennani@nevolys.com"/> 
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB" id="multiple_3">
                                      
                                      <div className="row multiple_section"  id="multiple_section_3">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">GSM</label>
                                         </div>
                                         <div className="col-sm-7 innerAddDelBase">
                                            <div className="innerAddDel">
<div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(3);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,3);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                               </div>                                              

                                             <input value="" name="telNo_3_1"  id="telNo_3_1" type="text" className="form-control" placeholder="06 60 40 31 38" /> 
                                            </div>
                                         </div>
                                      </div>
                                      
                                      
                                      
                                      <div className="row d-none">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label"></label>
                                         </div>
                                         <div className="col-sm-7 innerAddDelBase">
                                            <div className="innerAddDel">
                                               <a href="#/" className="innerAddDelBtn"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                               <input value="" name="" type="text" className="form-control" placeholder="05 22 98 11 94"/> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB" id="multiple_4">
                                      <div className="row multiple_section "  id="multiple_section_4">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Tel</label>
                                         </div>
                                         <div className="col-sm-7 innerAddDelBase">
                                            <div className="innerAddDel">
                                            
<div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(4);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,4);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                               </div>											 
                                            
                                            
                                            <input value="" name="telNo_4_1"  id="telNo_4_1" type="text" className="form-control" placeholder="05 22 98 11 94" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Start Date</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <div className="innerCalendar rightCalendar">
                                               <span className="cimr cimr-cimrfi-calendar-alt"></span>
                                               <input id="fundDate_1" data-provide="datepicker" aria-label="" className="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2001" onpaste="return false;" oncut="return false" />
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Effective To Date</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <div className="innerCalendar rightCalendar">
                                               <span className="cimr cimr-cimrfi-calendar-alt"></span>
                                               <input id="fundDate_1" data-provide="datepicker" aria-label="" className="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2011" onpaste="return false;" oncut="return false" />
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-12 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-12 pr-0">
                                            <label className="label-txt col-form-label">
                                            <a href="#/" className="attestAuthorityBtn"> <span className="cimr cimr-cimrfi-external-link"></span> </a>Optionally, download any attestation of authority document</label>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Powers of Signatory</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <div className="custom-file">
                                               <div className="innerFileSearch ">											
                                                  <input type="file" className="custom-file-input" id="customFile" name="filename"/>
                                                  <label className="custom-file-label" for="customFile">Select your file</label>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="row row-cols-1 g-4 mb-3">
                          <div className="col">
                             <div className="card customCard">
                                <div className="card-body">
                                   <p className="card-title mb-0">You can set up an account manager for your member account that is different from the signatory, who will be responsible for managing the membership file without signing authorities. </p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="card">
                          <div className="card-header">
                             <a className="collapsed accBtn" data-bs-toggle="collapse" href="#decDetails">Account Manager <span className="fasRight"></span></a>                        
                          </div>
                          <div id="decDetails" className="collapse show" aria-labelledby="Documents Details" data-bs-parent="#appDetails_accordion">
                             <div className="card-body">
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Name</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="xyz" /> 
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">First Name</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="abc" /> 
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">CIN</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="BE717488"/>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Nationality</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <select className="custom-select w-100 field-text">
                                               <option selected="selected" value="">Moroccan</option>
                                               <option value=""></option>
                                               <option value=""></option>
                                            </select>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Function</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Managing" /> 
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                      <div className="row">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Email</label>
                                         </div>
                                         <div className="col-sm-7">
                                            <input value="" name="" type="text" className="form-control" placeholder="Youssef.bennani@nevolys.com" /> 
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB" id="multiple_5">
                                      <div className="row  multiple_section"  id="multiple_section_5">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">GSM</label>
                                         </div>
                                         <div className="col-sm-7 innerAddDelBase">
                                            <div className="innerAddDel">
                                            
                                            
<div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(5);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,5);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                               </div>
                                                                                         
                                            
                                            
                                            <input value="" name="telNo_5_1"  id="telNo_5_1" type="text" className="form-control" placeholder="05 22 98 11 54" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 col-sm-12 col_MB"  id="multiple_6">
                                      <div className="row  multiple_section"  id="multiple_section_6">
                                         <div className="col-sm-5 pr-0">
                                            <label className="label-txt col-form-label">Tel</label>
                                         </div>
                                         <div className="col-sm-7 innerAddDelBase">
                                            <div className="innerAddDel">
                                                <div className="addmoresection">
                                               <a href="#/" className="innerAddDelBtn " onclick="addSingleDetails(1);"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                              </div>
                                              <div className="adminAccEditDel" style="display:none;">
<a href="#/" className="innerAddDelBtn delMoreBut" onclick="removeSingleDetails(1,1);"> <span className="cimr cimr-cimrfi-minus-square"></span></a>											   
                                                                               
                                               </div>
                                           
                                               <input value="" name="telNo_1_1"  id="telNo_1_1" type="text" className="form-control" placeholder="05 22 98 11 24" /> 
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="form-group row">
                                   <div className="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                      <div className="row p-1">
                                         <div className="col-lg-4 col-sm-5">
                                            <label className="label-txt">Authorization to vote at a general meeting <span className="mandatory_txt">*</span></label>
                                         </div>
                                         <div className="col-lg-8 col-sm-7 pt-0 px-0 col_PB">
                                            <div className="form-check form-check-inline">
                                               <input className="form-check-input" type="radio" name="inlineRadioOptions1" value="option4" checked="checked" />
                                               <label className="form-check-label" for="inlineRadio4"><span className="field-text">YES</span></label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                               <input className="form-check-input" type="radio" name="inlineRadioOptions1" value="option5" />
                                               <label className="form-check-label" for="inlineRadio5"><span className="field-text">NO</span></label>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="row row-cols-1 g-4 mb-3">
                          <div className="col">
                             <div className="card customCard">
                                <div className="card-body">
                                   <span className="headerTitle"> Consent</span>
                                   <p className="mb-0">
                                      By clicking on validate, we confirm the collection of the consents of all concerned persons (agent, account manager...etc) for the processing of their personal data in accordance with Law 09-08.
                                   </p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-12 py-4">
                          <div className="form-group text-center">
                             <a href="ecran1_prospect_fo.html" className="btn orangeBtn" >Return</a>
                             <a href="#" className="btn orangeBtn" >Save</a>
                             <a href="ecran3_prospect_fo.html" className="btn orangeBtn" >Validate</a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
            <footer incl_html="footer_inner.html"></footer>
           <div id="footerInner">
              <div className="footerInnerSet" align="center">
                 &copy; Caisse interprofessionnelle marocaine de retraite, Accueil - CIMR
              </div>
           </div>
        
        </div>
    
     </div>
    )
}

export default SecondPage