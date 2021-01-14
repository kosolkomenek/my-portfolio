import React from 'react';
import './Skill.css';
import 'font-awesome/css/font-awesome.min.css';

const Skill = () => {
	return(
		<div class="title-skill">
	      <div class="container">
	          <h1>
	            The skills of me
	          </h1>
		      <div class="progress">
	  			<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>HTML 7/10</div>
		      </div>
		      <div class="progress">
	  			<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>CSS 6/10</div>
		      </div>
		      <div class="progress">
	  			<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>Javascipt 5/10</div>
		      </div>
		      <div class="progress">
	  			<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>React 4/10</div>
		      </div>
		  </div>
		   <div class="container">
                <a href="#top" class="back-to-top">
                  <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </a>
            </div>
	    </div>
	);
}

export default Skill;