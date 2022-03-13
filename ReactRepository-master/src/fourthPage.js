import React from "react";
import './css/cimr_styles.css';

import './fonts/fonticons/style.css';

function FourthPage()
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
               <p className="leadTitle pt-3"  align="center">Signature of the Electronic Signature Convention and submission of the file to the ICRC</p>
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
                     <li className="inProgress">
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
                  <div className="row row-cols-1 g-4 mb-4">
                     <div className="col">
                        <div className="card customGreenCard">
                           <div className="card-body">
                              <p className="card-title"><span className="headerGreenTitle">Congratulations!</span> You have just completed your application to join the ICMR. and to subscribe to the retirement contract - Al Kamil product.</p>
                              <p className="card-title">In accordance with Article 1 of its General Retirement Regulations, and in order to facilitate transactions with its members, the CIMR. has opted for the electronic signature of documents according to a protocol defined in the Electronic Signature Convention (EPC).</p>
                              <p className="card-title">This agreement is the only contractual document you will have to sign on paper.</p>
                              <p className="card-title">At the time of validation of your application, we will print “<span className="importTitle">The letter of application for membership and subscription to the retirement contract - Al Kamil product</span>” as well as “<span className="importTitle">The Electronic Signature Agreement</span>”.</p>
                              <p className="card-title">These documents, duly signed by the social representative(s) or the authorized person, and bearing your commercial stamp, must be sent to the CIMR., accompanied by the supporting documents listed below. </p>
                              <p className="card-title">After validation by the ICRC, the social representative(s) or authorized person shall be notified for the signature of the contract documents. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                     <div className="col">
                        <div className="card customCard h-100">
                           <div className="card-body" style="display: flex;">
						   <span className="cimr-cimrfi-passport" style="font-size: 3rem;color: #fbd290;margin: auto;"></span>
                              <h6 className="card-title" style="margin: auto;margin-left: 15px;width: 85%;">Electronic Signature Agreement</h6>
							  
                           </div>
                           <div className="card-footer bg-transparent border-0 text-end"><a href="#/" className="btn orangeBtn stretched-link">To print</a></div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="card customCard h-100">
                           <div className="card-body" style="display: flex;">
						   <span className="cimr-cimrfi-poll-h" style="font-size: 3rem;color: #fbd290;margin: auto;"></span>
                              <h6 className="card-title" style="margin: auto;margin-left: 15px;width: 85%;">Letter of application for membership and subscription to the retirement contract - Al Kamil product</h6>
							  
                           </div>
                           <div className="card-footer bg-transparent border-0 text-end"><a href="#/" className="btn orangeBtn stretched-link">To print</a></div>
                        </div>
                     </div>
                  </div>
                  <p className="innerLeadText mt-4">Supporting documents to be sent to the ICRC</p>
                  <div className="customBullet">
                     <ul>
                        <li>Original extract from Trade Register Model J dated less than 12 months</li>
                        <li>ICE certificate	</li>
                        <li>Powers of legal representative(s) or authorized person </li>
                     </ul>
                  </div>
                  <div className="col-12 py-4">
                     <div className="form-group text-center">
                        <a href="ecran3_prospect_fo.html" className="btn orangeBtn" >Return</a>
                        <a href="ecran5_prospect_fo.html" className="btn orangeBtn" >Validate</a>
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

export default FourthPage