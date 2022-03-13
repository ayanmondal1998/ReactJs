import React, { useState } from 'react';
import './css/cimr_styles.css';

import './fonts/fonticons/style.css';


function FirstPage(){
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
                  <p className="leadTitle pt-3"  align="center">STEPS IN THE CIMR. RETIREMENT CONTRACT MEMBERSHIP AND SUBSCRIPTION PROCESS</p>
                  <p className="subTitle "  align="center">Simply complete your membership and subscribe to an online CIMR. retirement contract in 4 steps</p>
                  <div className="stepProgressContainer">
                     <ul className="stepProgressBar mb-3">
                        <li className="initial">
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
						<div className="row row-cols-1 g-4" style="margin-bottom: 100px;">
                           <div className="col">
                              <div className="card customGreenCard">
                                 <div className="card-body">
                                    <p className="innerLeadText text-center mb-0">You can apply to join and subscribe to a CIMR. Pension contract online by clicking next.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12 py-4" style="margin-bottom: 130px;">
                           <div className="form-group text-center">
                              <a href="#" className="btn orangeBtn" >Cancel</a>
                              <a href="ecran2_prospect_fo.html" className="btn orangeBtn" >Continue</a>
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

export default FirstPage