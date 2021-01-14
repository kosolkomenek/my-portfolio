import React from 'react';
import './About.css';
import profile from './assets/Profile.png'

const About = () => {
  return(
    <section id="about">
      <div class="container">
        <h2 class="section-title tc">
          ABOUT ME
        </h2>
        <div class="row about-wrapper">
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__image">
              <img
                class="fl w-50"
                height="auto"
                width="200px"
                src={profile}
                alt="profileimage"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="about-wrapper__info">
              <p class="about-wrapper__info-text">
                I graduated from Chulalongkorn University 
                Bachelor of Engineering Mechanical Engineering (second-class honors): GPAX 3.35
                My hobby is watch the netflix, play the game and go to gym.  
              </p>
              <p class="about-wrapper__info-text">
                My nickname is heng I am interested in IT related filed. 
                I am looking for frontend developer position. 
                if you are looking for someone who eager to learn new things. 
                please give me an opportunity to work with your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;