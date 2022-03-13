import React from "react";

function ThirdPage()
{
    return(
        <div>
            <div class="container-fluid px-0">
         
         <div id="wrapper">
    
             <header incl_html="header_innerProfile.html"></header>
			<div class="headerBG">
			    <div class="container">
				  <div class="row">
					 <div class="logoImgBase">
						<a href="#/" title="CIMR" class="logoImgBtn">
						<img class="logoImg" src="images/logo-cimr.png"/>
						</a>
					 </div>
					 <div class="logoHeaderBase">
					<span class="headerTitle">WELL PREPARED RETREAT, FUTURE ASSURES!</span>
					<a href="#/" class="headerHomeBtn"> <span class=" cimr-cimrfi-home-alt"></span> </a>
					 </div>
				  </div>
		        </div>
		    </div>
            

            <div class="container">
               <div class="stepProgressPanel">
                  <p class="leadTitle pt-3"  align="center">Enrollment in the Pension Contract</p>
                  <p class="subTitle "  align="center">(In Process of Entry)</p>
                  <div class="stepProgressContainer">
                     <ul class="stepProgressBar mb-3">
                        <li class="completed ">
                           <span class="datePara">1</span>
                           <span>Seizure of Membership</span>
                        </li>
                        <li class="inProgress">
                           <span class="datePara">2</span>
                           <span>Entering the Retirement Contract </span>
                        </li>
                        <li class="initial">
                           <span class="datePara">3</span>
                           <span>Signature of the Electronic Signature Convention and submission of the file to the ICRC </span>
                        </li>
                        <li class="initial">
                           <span class="datePara">4</span>
                           <span>Electronic Signature of Contract Documents</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="content_panel">
                  <div class="px-3">
                     <div class="card">
                        <div class="card-header d-none">
                           <a class="collapsed accBtn" data-bs-toggle="collapse" href="#proftDetails"><span class="fasRight"></span></a>
                        </div>
                        <div id="proftDetails" class="collapse show" aria-labelledby="Professional Details" data-bs-parent="#appDetails_accordion">
                           <div class="card-body">
                              <div class="form-group row">
                                 <div class="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                    <div class="row p-1">
                                       <div class="col-lg-5 col-sm-5">
                                          <label class="labelBoldTxt">Want to subscribe to a group or individual contract? <span class="mandatory_txt"></span></label>
                                       </div>
                                       <div class="col-lg-7 col-sm-7 pt-0 px-0 col_PB">
                                          <div class="form-check form-check-inline">
                                             <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option1" checked="checked" />
                                             <label class="form-check-label" for="inlineRadio1"><span class="field-text">Group Contract</span></label>
                                          </div>
                                          <div class="form-check form-check-inline">
                                             <input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2" />
                                             <label class="form-check-label" for="inlineRadio2"><span class="field-text">Individual contract</span></label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p class="innerLeadText mt-3"> Our selection of CIMR. products tailored to your needs</p>
                     <p class=""> Check the CIMR. product you want to subscribe to</p>
                     <div class="row row-cols-1 row-cols-md-3 g-4 radio-group">
                        <div class="col">
                           <div class="card cardRadio cardSelected h-100">
                              <div class="card-body">
                                 <h6 class="card-title labelBoldTxt">Al Kamil</h6>
                                 <p class="card-title small"><u>Description</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore et dolore magna aliqua. </p>
                                 <p class="card-title small mb-0"><u>Guarantees</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              </div>
                              <div class="card-footer bg-transparent  border-0 text-end"><a href="#/" class="btn orangeBtn stretched-link">Detail View</a></div>
                           </div>
                        </div>
                        <div class="col">
                           <div class="card cardRadio h-100">
                              <div class="card-body">
                                 <h6 class="card-title labelBoldTxt">Al Mounassib</h6>
                                 <p class="card-title small"><u>Description</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore et dolore magna aliqua. </p>
                                 <p class="card-title small mb-0"><u>Guarantees</u><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                              </div>
                              <div class="card-footer bg-transparent  border-0 text-end"><a href="#/" class="btn orangeBtn stretched-link">Detail View</a></div>
                           </div>
                        </div>
                     </div>
                     <p class="innerLeadText mt-4"> Specify product characteristics </p>
                     <div class="accCustomStyle" id="appDetails_accordion">
                        <div class="card">
                           <div class="card-header">
                              <a class="collapsed accBtn" data-bs-toggle="collapse" href="#applicationDetails">Product Characteristics <span class="fasRight"></span></a>
                           </div>
                           <div id="applicationDetails" class="collapse show" aria-labelledby="Personal Details" data-bs-parent="#appDetails_accordion">
                              <div class="card-body">
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Product</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Al Kamil" />
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Nature plate</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Salary" />
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Enrollment bill date</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <div class="innerCalendar">
                                                <span class="cimr cimr-cimrfi-calendar-alt"></span>
                                                <input id="fundDate_1" data-provide="datepicker" aria-label="" class="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2001" onpaste="return false;" oncut="return false" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="table-responsive">
                                    <table class="table customTable">
                                       <thead class="thead-light">
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
                        <div class="card">
                           <div class="card-header">
                              <a class="collapsed accBtn" data-bs-toggle="collapse" href="#docDetails">Specify Delegates <span class="fasRight"></span></a>                        
                           </div>
                           <div id="docDetails" class="collapse show" aria-labelledby="Documents Details" data-bs-parent="#appDetails_accordion">
                              <div class="card-body">
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Name</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Bennani" /> 
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">First Name</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Youssef" /> 
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">CIN</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="BE717488" />
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Nationality</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <select class="custom-select w-100 field-text">
                                                <option selected="selected" value="">Moroccan</option>
                                                <option value=""></option>
                                                <option value=""></option>
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Function</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Managing"/> 
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Email</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <input value="" name="" type="text" class="form-control" placeholder="Youssef.bennani@nevolys.com" /> 
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">GSM</label>
                                          </div>
                                          <div class="col-sm-7 innerAddDelBase">
                                             <div class="innerAddDel">
                                                <a href="#/" class="innerAddDelBtn"> <span class="cimr cimr-cimrfi-plus-square"></span></a>
                                                <input value="" name="" type="text" class="form-control" placeholder="06 60 40 31 38" /> 
                                             </div>
                                          </div>
                                       </div>
                                       <div class="row d-none">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label"></label>
                                          </div>
                                          <div class="col-sm-7 innerAddDelBase">
                                             <div class="innerAddDel">
                                                <a href="#/" class="innerAddDelBtn"> <span class="cimr cimr-cimrfi-plus-square"></span></a>
                                                <input value="" name="" type="text" class="form-control" placeholder="05 22 98 11 94" /> 
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Tel</label>
                                          </div>
                                          <div class="col-sm-7 innerAddDelBase">
                                             <div class="innerAddDel">
                                                <a href="#/" class="innerAddDelBtn"> <span class="cimr cimr-cimrfi-plus-square"></span></a>
                                                <input value="" name="" type="text" class="form-control" placeholder="05 22 98 11 94" /> 
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Start Date</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <div class="innerCalendar rightCalendar">
                                                <span class="cimr cimr-cimrfi-calendar-alt"></span>
                                                <input id="fundDate_1" data-provide="datepicker" aria-label="" class="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2001" onpaste="return false;" oncut="return false" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-5 pr-0">
                                             <label class="label-txt col-form-label">Effective To Date</label>
                                          </div>
                                          <div class="col-sm-7">
                                             <div class="innerCalendar rightCalendar">
                                                <span class="cimr cimr-cimrfi-calendar-alt"></span>
                                                <input id="fundDate_1" data-provide="datepicker" aria-label="" class="form-control " data-date-format="dd/mm/yyyy" value="18 Nov,1975" oncopy="return false;" placeholder="18-05-2011" onpaste="return false;" oncut="return false" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                       <div class="row p-1">
                                          <div class="col-lg-4 col-sm-5">
                                             <label class="label-txt">General Meeting Voting Authority <span class="mandatory_txt">*</span></label>
                                          </div>
                                          <div class="col-lg-8 col-sm-7 pt-0 px-0 col_PB">
                                             <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="option4" checked="checked" />
                                                <label class="form-check-label" for="inlineRadio4"><span class="field-text">YES</span></label>
                                             </div>
                                             <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions1" value="option5" />
                                                <label class="form-check-label" for="inlineRadio5"><span class="field-text">NO</span></label>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <div class="col-lg-12 col-md-6 col-sm-12 col_MB">
                                       <div class="row">
                                          <div class="col-sm-12 pr-0 mt-4">
                                             <label class="innerLeadText col-form-label">Specify delegate entitlements by type of intervention</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="table-responsive">
                                    <table class="table customTable">
                                       <thead class="thead-light">
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
                        <div class="col-12 py-4">
                           <div class="form-group text-center">
                              <a href="ecran2_prospect_fo.html" class="btn orangeBtn" >Return</a>
                              <a href="#" class="btn orangeBtn" >Save</a>
                              <a href="ecran4_prospect_fo.html" class="btn orangeBtn" >Validate</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
             <footer incl_html="footer_inner.html"></footer>
			<div id="footerInner">
               <div class="footerInnerSet" align="center">
                  &copy; Caisse interprofessionnelle marocaine de retraite, Accueil - CIMR
               </div>
            </div>
           
         </div>
         
      </div>
      
        </div>
    )
}

export default ThirdPage