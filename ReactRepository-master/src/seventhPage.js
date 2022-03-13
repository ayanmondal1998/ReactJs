import React from "react";

function SeventhPage()
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
                  <p class="leadTitle pt-3"  align="center">Electronic signature of the Easy Payment Newsletter</p>
                  <p class="subTitle "  align="center">&nbsp;</p>
                  <div class="stepProgressContainer">
                     <ul class="stepProgressBar mb-3">
                        <li class="completed">
                           <span class="datePara">1</span>
                           <span>Seizure of Membership</span>
                        </li>
                        <li class="completed">
                           <span class="datePara">2</span>
                           <span>Entering the Retirement Contract </span>
                        </li>
                        <li class="completed">
                           <span class="datePara">3</span>
                           <span>Signature of the Electronic Signature Convention and submission of the file to the ICRC </span>
                        </li>
                        <li class="inProgress">
                           <span class="datePara">4</span>
                           <span>Electronic Signature of Contract Documents</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="content_panel">
                  <div class="px-3">
                     <p class="innerLeadText">Your application for the pension contract has been accepted by the ICMR</p>
                     <p class="">Please sign the Easy Payment newsletter electronically</p>
                     <div class="row row-cols-1 row-cols-lg-3 g-4">
                        <div class="col">
                           <div class="card customCard">
                              <div class="card-body">
                                 <h6 class="card-title">Pension Contract Reference</h6>
                                 <a href="#/" class="btn orangeBtn" data-bs-toggle="modal" data-bs-target="#membershipFileReference">Visualization</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p class="innerLeadText mt-4">Electronic signature by banking delegate</p>
                     <div class="row row-cols-1 row-cols-lg-3 g-4">
                        <div class="col">
                           <div class="card customCard h-100">
                              <div class="card-body">
                                 <h6 class="card-title">Easy Payment Newsletter</h6>
                                 <a href="#/" class="btn orangeBtn">Visualization</a>
                              </div>
                           </div>
                        </div>
                        <div class="col electSignMainBase">
                           <div class="card customCard h-100">
                              <div class="card-body electSignMainBaseCardBody">
                                 <a href="#/" > <img src="images/pdf_download.png" class="electSignPDF" /></a>
                                 <form action="submit.php" onsubmit="return onSubmit(this)" method="post" class="customForm">
                                 <div class="d-none">
                                    <input name="signatureName" placeholder="Your name" required />
                                 </div>
                                 <div>
                                    <canvas class="customCanvasCard--" id="signatureCanvas" width="280" height="60"></canvas>
                                     <canvas class="customCanvasCard" id="signatureCanvas"></canvas>
                                 </div>
                                 <div>
                                    <input type="hidden" name="signatureValue" />
                                 </div>
								 <div>
									<button type="button" class="btn orangeBtn" onclick="onClearSignature()">Clear</button>
									<button type="submit"  class="btn orangeBtn">Electronic Signature</button>
								  </div>
                                 </form>
                              </div>
							  
							  
                           </div>
                        </div>
                     </div>
                     <div class="card mt-3 OTPEntryPanel">
                        <div class="card-body">
                           <div class="form-group row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                 <div class="row p-1">
                                    <div class="col-lg-5 col-sm-5">
                                       <label class="label-txt col-form-label">OTP Entry Received</label>
                                    </div>
                                    <div class="col-lg-7 col-sm-7">
                                       <label class="col-form-label">XXXX</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-12 py-4">
                        <div class="form-group text-center">
                           <a href="ecran6_prospect_fo.html" class="btn orangeBtn" >Return</a>
                           <a href="#/" class="btn orangeBtn" >Validate</a>
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
      
      <div class="modal fade" id="membershipFileReference">
         <div class="modal-dialog">
            <div class="modal-content">
               
               <div class="modal-header">
                  <h6 class="modal-title">Pension Contract Reference</h6>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
               </div>
               
               <div class="modal-body">
                  <div class="table-responsive">
                     <table class="table table-borderless">
                        <tbody>
                           <tr>
                              <td>Retirement Contract Number</td>
                              <td>AD_2020_036</td>
                           </tr>
                           <tr>
                              <td>Business Name</td>
                              <td>Nevolys Consulting</td>
                           </tr>
                           <tr>
                              <td>RC No.</td>
                              <td>237,999</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    )
}

export default SeventhPage