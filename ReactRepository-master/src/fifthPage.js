import React from "react";

function FifthPage()
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
                  <p className="leadTitle pt-3"  align="center">Electronic Signature of the Membership Form</p>
                  <p className="subTitle "  align="center">&nbsp;</p>
                  <div className="stepProgressContainer">
                     <ul className="stepProgressBar mb-3">
                        <li className="completed">
                           <span className="datePara">1</span>
                           <span>Seizure of Membership</span>
                        </li>
                        <li className="completed">
                           <span className="datePara">2</span>
                           <span>Entering the Retirement Contract </span>
                        </li>
                        <li className="completed">
                           <span className="datePara">3</span>
                           <span>Signature of the Electronic Signature Convention and submission of the file to the ICRC </span>
                        </li>
                        <li className="inProgress">
                           <span className="datePara">4</span>
                           <span>Electronic Signature of Contract Documents</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="content_panel">
                  <div className="px-3">
                     <p className="innerLeadText"> Your membership application has been accepted by the ICMR</p>
                     <p className=""> Please proceed to the electronic signature of the membership form</p>
                     <div className="row row-cols-1 row-cols-lg-3 g-4">
                        <div className="col">
                           <div className="card customCard">
                              <div className="card-body">
                                 <h6 className="card-title">Membership File Reference</h6>
                                 <a href="#/" className="btn orangeBtn" data-bs-toggle="modal" data-bs-target="#membershipFileReference">Visualization</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p className="innerLeadText mt-4">Electronic signature of authorized representative or person</p>
                     <div className="row row-cols-1 row-cols-lg-3 g-4">
                        <div className="col">
                           <div className="card customCard h-100">
                              <div className="card-body">
                                 <h6 className="card-title">Membership Newsletter</h6>
                                 <a href="#/" className="btn orangeBtn">Visualization</a>
                              </div>
                           </div>
                        </div>
                        <div className="col electSignMainBase">
						   <div className="card customCard h-100">
                              <div className="card-body electSignMainBaseCardBody">
                                 <a href="#/" > <img src="images/pdf_download.png" className="electSignPDF" /></a>
                                 <form action="submit.php" onsubmit="return onSubmit(this)" method="post" className="customForm">
                                 <div className="d-none">
                                    <input name="signatureName" placeholder="Your name" required />
                                 </div>
                                 <div>
                                    <canvas className="customCanvasCard--" id="signatureCanvas" width="280" height="60"></canvas>
                                    <canvas className="customCanvasCard" id="signatureCanvas"></canvas>
                                 </div>
                                 <div>
                                    <input type="hidden" name="signatureValue" />
                                 </div>
								 <div>
									<button type="button" className="btn orangeBtn" onclick="onClearSignature()">Clear</button>
									<button type="submit"  className="btn orangeBtn">Electronic Signature</button>
								  </div>
                                 </form>
                              </div>
							  
							 
                           </div>
                        </div>
                     </div>
                     <div className="card mt-3 OTPEntryPanel">
                        <div className="card-body">
                           <div className="form-group row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col_MB mb-0">
                                 <div className="row p-1">
                                    <div className="col-lg-5 col-sm-5">
                                       <label className="label-txt col-form-label">OTP Entry Received</label>
                                    </div>
                                    <div className="col-lg-7 col-sm-7">
                                       <label className="col-form-label">XXXX</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 py-4">
                        <div className="form-group text-center">
                           <a href="ecran4_prospect_fo.html" className="btn orangeBtn" >Return</a>
                           <a href="ecran6_prospect_fo.html" className="btn orangeBtn" >Validate</a>
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
      
      <div className="modal fade" id="membershipFileReference">
         <div className="modal-dialog">
            <div className="modal-content">
              
               <div className="modal-header">
                  <h6 className="modal-title">Membership File Reference</h6>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
               </div>
              
               <div className="modal-body">
                  <div className="table-responsive">
                     <table className="table table-borderless">
                        <tbody>
                           <tr>
                              <td>Membership Number </td>
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

export default FifthPage