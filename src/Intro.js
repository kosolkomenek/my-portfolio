import React from 'react';
import './Intro.css';

const Intro = () => {
	return(
		<div class="title-intro jumbotron">
	      <div class="container">
	        <h1>
	          Hi, my name is <span class="text-color-main">Kosol Komenek</span>
	          <br />
	          I'm the Developer you need.
	        </h1>
	        <p>
	          <a href="#about" class="btn btn-primary btn-lg" role="button" aria-pressed="true">Hire me</a>
	        </p>
	      </div>
	    </div>
	);
}

export default Intro;