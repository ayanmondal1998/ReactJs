import React, { useState } from 'react';
import './css/cimr_styles.css';

import './fonts/fonticons/style.css';


function firstPage(){
    return(
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
                  <p class="leadTitle pt-3"  align="center">STEPS IN THE CIMR. RETIREMENT CONTRACT MEMBERSHIP AND SUBSCRIPTION PROCESS</p>
                  <p class="subTitle "  align="center">Simply complete your membership and subscribe to an online CIMR. retirement contract in 4 steps</p>
                  <div class="stepProgressContainer">
                     <ul class="stepProgressBar mb-3">
                        <li class="initial">
                           <span class="datePara">1</span>
                           <span>Seizure of Membership</span>
                        </li>
                        <li class="initial">
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
						<div class="row row-cols-1 g-4" style="margin-bottom: 100px;">
                           <div class="col">
                              <div class="card customGreenCard">
                                 <div class="card-body">
                                    <p class="innerLeadText text-center mb-0">You can apply to join and subscribe to a CIMR. Pension contract online by clicking next.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 py-4" style="margin-bottom: 130px;">
                           <div class="form-group text-center">
                              <a href="#" class="btn orangeBtn" >Cancel</a>
                              <a href="ecran2_prospect_fo.html" class="btn orangeBtn" >Continue</a>
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
        
    )
}

export default firstPage