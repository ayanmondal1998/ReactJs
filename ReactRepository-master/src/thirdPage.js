import React from "react";

function ThirdPage()
{
    return(
        <div>
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
                  <p className="leadTitle pt-3"  align="center">Enrollment in the Pension Contract</p>
                  <p className="subTitle "  align="center">(In Process of Entry)</p>
                  <div className="stepProgressContainer">
                     <ul className="stepProgressBar mb-3">
                        <li className="completed ">
                           <span className="datePara">1</span>
                           <span>Seizure of Membership</span>
                        </li>
                        <li className="inProgress">
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
                     <div className="card">
                        <div className="card-header d-none">
                           <a className="collapsed accBtn" data-bs-toggle="collapse" href="#proftDetails"><span className="fasRight"></span></a>
                        </div>
                        <div id="proftDetails" className="collapse show" aria-labelledby="Professional Details" data-bs-parent="#appDetails_accordion">
                           <div className="card-body">
                              <div className="form-group row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                    <div className="row p-1">
                                       <div className="col-lg-5 col-sm-5">
                                          <label className="labelBoldTxt">Want to subscribe to a group or individual contract? <span className="mandatory_txt"></span></label>
                                       </div>
                                       <div className="col-lg-7 col-sm-7 pt-0 px-0 col_PB">
                                          <div className="form-check form-check-inline">
                                             <input className="form-check-input" type="radio" name="inlineRadioOptions" value="option1" checked="checked" />
                                             <label className="form-check-label" for="inlineRadio1"><span className="field-text">Group Contract</span></label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                             <input className="form-check-input" type="radio" name="inlineRadioOptions" value="option2" />
                                             <label className="form-check-label" for="inlineRadio2"><span className="field-text">Individual contract</span></label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p className="innerLeadText mt-3"> Our selection of CIMR. products tailored to your needs</p>
                     <p className=""> Check the CIMR. product you want to subscribe to</p>
                     <div className="row row-cols-1 row-cols-md-3 g-4 radio-group">
                        <div className="col">
                           <div className="card cardRadio cardSelected h-100">
                              <div className="card-body">
                                 <h6 className="card-title labelBoldTxt">Al Kamil</h6>
                                 <p className="card-title small"><u>Description</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore et dolore magna aliqua. </p>
                                 <p className="card-title small mb-0"><u>Guarantees</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              </div>
                              <div className="card-footer bg-transparent  border-0 text-end"><a href="#/" className="btn orangeBtn stretched-link">Detail View</a></div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card cardRadio h-100">
                              <div className="card-body">
                                 <h6 className="card-title labelBoldTxt">Al Mounassib</h6>
                                 <p className="card-title small"><u>Description</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore et dolore magna aliqua. </p>
                                 <p className="card-title small mb-0"><u>Guarantees</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              </div>
                              <div className="card-footer bg-transparent  border-0 text-end"><a href="#/" className="btn orangeBtn stretched-link">Detail View</a></div>
                           </div>
                        </div>
                     </div>
                     <p className="innerLeadText mt-4"> Specify product characteristics </p>
                     <div className="accCustomStyle" id="appDetails_accordion">
                        <div className="card">
                           <div className="card-header">
                              <a className="collapsed accBtn" data-bs-toggle="collapse" href="#applicationDetails">Product Characteristics <span className="fasRight"></span></a>
                           </div>
                           <div id="applicationDetails" className="collapse show" aria-labelledby="Personal Details" data-bs-parent="#appDetails_accordion">
                              <div className="card-body">
                                 <div className="form-group row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-5 pr-0">
                                             <label className="label-txt col-form-label">Product</label>
                                          </div>
                                          <div className="col-sm-7">
                                             <input value="" name="" type="text" className="form-control" placeholder="Al Kamil" />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-5 pr-0">
                                             <label className="label-txt col-form-label">Nature plate</label>
                                          </div>
                                          <div className="col-sm-7">
                                             <input value="" name="" type="text" className="form-control" placeholder="Salary" />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-5 pr-0">
                                             <label className="label-txt col-form-label">Enrollment bill date</label>
                                          </div>
                                          <div className="col-sm-7">
                                             <div className="innerCalendar">
                                                <span className="cimr cimr-cimrfi-calendar-alt"></span>
                                                <input id="fundDate_1" data-provide="datepicker" aria-label="" className="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2001" onpaste="return false;" oncut="return false" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="table-responsive">
                                    <table className="table customTable">
                                       <thead className="thead-light">
                                          <tr>
                                             <th>Category No.</th>
                                             <th>Category</th>
                                             <th>% Salary Share</th>
                                             <th>% Employer share</th>
                                             <th>Salary mass</th>
                                             <th>Headcount</th>
                                             <th>Option</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>...</td>
                                             <td></td>
                                             <td> </td>
                                             <td></td>
                                             <td></td>
                                             <td>  </td>
                                             <td></td>
                                          </tr>
                                          <tr>
                                             <td>...</td>
                                             <td></td>
                                             <td> </td>
                                             <td></td>
                                             <td></td>
                                             <td>  </td>
                                             <td></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header">
                              <a className="collapsed accBtn" data-bs-toggle="collapse" href="#docDetails">Specify Delegates <span className="fasRight"></span></a>                        
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
                                             <input value="" name="" type="text" className="form-control" placeholder="Youssef" /> 
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
                                             <input value="" name="" type="text" className="form-control" placeholder="Youssef.bennani@nevolys.com" /> 
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-5 pr-0">
                                             <label className="label-txt col-form-label">GSM</label>
                                          </div>
                                          <div className="col-sm-7 innerAddDelBase">
                                             <div className="innerAddDel">
                                                <a href="#/" className="innerAddDelBtn"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                                <input value="" name="" type="text" className="form-control" placeholder="06 60 40 31 38" /> 
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
                                                <input value="" name="" type="text" className="form-control" placeholder="05 22 98 11 94" /> 
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-5 pr-0">
                                             <label className="label-txt col-form-label">Tel</label>
                                          </div>
                                          <div className="col-sm-7 innerAddDelBase">
                                             <div className="innerAddDel">
                                                <a href="#/" className="innerAddDelBtn"> <span className="cimr cimr-cimrfi-plus-square"></span></a>
                                                <input value="" name="" type="text" className="form-control" placeholder="05 22 98 11 94" /> 
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
                                    <div className="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                       <div className="row p-1">
                                          <div className="col-lg-4 col-sm-5">
                                             <label className="label-txt">General Meeting Voting Authority <span className="mandatory_txt">*</span></label>
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
                                 <div className="form-group row">
                                    <div className="col-lg-12 col-md-6 col-sm-12 col_MB">
                                       <div className="row">
                                          <div className="col-sm-12 pr-0 mt-4">
                                             <label className="innerLeadText col-form-label">Specify delegate entitlements by type of intervention</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="table-responsive">
                                    <table className="table customTable">
                                       <thead className="thead-light">
                                          <tr>
                                             <th>Categories</th>
                                             <th>Affiliates & Salaries</th>
                                             <th>Payment & Easy Payment</th>
                                             <th>Payment & Easy Payment(spouse)</th>
                                             <th>Settlement</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>-</td>
                                             <td></td>
                                             <td> </td>
                                             <td></td>
                                             <td></td>
                                          </tr>
                                          <tr>
                                             <td>-</td>
                                             <td></td>
                                             <td> </td>
                                             <td></td>
                                             <td></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 py-4">
                           <div className="form-group text-center">
                              <a href="ecran2_prospect_fo.html" className="btn orangeBtn" >Return</a>
                              <a href="#" className="btn orangeBtn" >Save</a>
                              <a href="ecran4_prospect_fo.html" className="btn orangeBtn" >Validate</a>
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
      
        </div>
    )
}

export default ThirdPage