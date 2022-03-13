import React from "react";
import './css/cimr_styles.css';

import './fonts/fonticons/style.css';

function FourthPage()
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
               <p class="leadTitle pt-3"  align="center">Signature of the Electronic Signature Convention and submission of the file to the ICRC</p>
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
                     <li class="inProgress">
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
                  <div class="row row-cols-1 g-4 mb-4">
                     <div class="col">
                        <div class="card customGreenCard">
                           <div class="card-body">
                              <p class="card-title"><span class="headerGreenTitle">Congratulations!</span> You have just completed your application to join the ICMR. and to subscribe to the retirement contract - Al Kamil product.</p>
                              <p class="card-title">In accordance with Article 1 of its General Retirement Regulations, and in order to facilitate transactions with its members, the CIMR. has opted for the electronic signature of documents according to a protocol defined in the Electronic Signature Convention (EPC).</p>
                              <p class="card-title">This agreement is the only contractual document you will have to sign on paper.</p>
                              <p class="card-title">At the time of validation of your application, we will print “<span class="importTitle">The letter of application for membership and subscription to the retirement contract - Al Kamil product</span>” as well as “<span class="importTitle">The Electronic Signature Agreement</span>”.</p>
                              <p class="card-title">These documents, duly signed by the social representative(s) or the authorized person, and bearing your commercial stamp, must be sent to the CIMR., accompanied by the supporting documents listed below. </p>
                              <p class="card-title">After validation by the ICRC, the social representative(s) or authorized person shall be notified for the signature of the contract documents. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                     <div class="col">
                        <div class="card customCard h-100">
                           <div class="card-body" style="display: flex;">
						   <span class="cimr-cimrfi-passport" style="font-size: 3rem;color: #fbd290;margin: auto;"></span>
                              <h6 class="card-title" style="margin: auto;margin-left: 15px;width: 85%;">Electronic Signature Agreement</h6>
							  
                           </div>
                           <div class="card-footer bg-transparent border-0 text-end"><a href="#/" class="btn orangeBtn stretched-link">To print</a></div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="card customCard h-100">
                           <div class="card-body" style="display: flex;">
						   <span class="cimr-cimrfi-poll-h" style="font-size: 3rem;color: #fbd290;margin: auto;"></span>
                              <h6 class="card-title" style="margin: auto;margin-left: 15px;width: 85%;">Letter of application for membership and subscription to the retirement contract - Al Kamil product</h6>
							  
                           </div>
                           <div class="card-footer bg-transparent border-0 text-end"><a href="#/" class="btn orangeBtn stretched-link">To print</a></div>
                        </div>
                     </div>
                  </div>
                  <p class="innerLeadText mt-4">Supporting documents to be sent to the ICRC</p>
                  <div class="customBullet">
                     <ul>
                        <li>Original extract from Trade Register Model J dated less than 12 months</li>
                        <li>ICE certificate	</li>
                        <li>Powers of legal representative(s) or authorized person </li>
                     </ul>
                  </div>
                  <div class="col-12 py-4">
                     <div class="form-group text-center">
                        <a href="ecran3_prospect_fo.html" class="btn orangeBtn" >Return</a>
                        <a href="ecran5_prospect_fo.html" class="btn orangeBtn" >Validate</a>
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

export default FourthPage