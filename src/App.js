import React from 'react';
import './App.css';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

function gimmethequote(){
  console.log("getting the quote");
}

function App() {
  return (
    <div class="body">

      <div class="floatingbutton" onClick={gimmethequote}>Get quote</div>

      <div class="sidenavbar">
        <a href="#idAboutUs">About</a>
        <a href="#">Gallery</a>
        <a href="#idTestimonial" id="testimonallogo">Testimonials</a>
        <a href="#">Clients</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>


      <div id="call-btn" class="visible-xs">
        <a class="btn" href="tel:7007937472">
          <span> 
            <img src={require("./CALLING_ICON.png")}></img>
          </span>
        </a>
      </div>
      
      {/* Header part is here
          We have our banner with the text and logo here */}
      <div class="header">
        <div class="insideBanner">
          <div class="pictureInsideBanner">
            <img src={require("./ghoulc.jpg")} alt="Logo" class="logo"></img>
          </div>
          <div class="textInsideBanner">
            <h1>Five Seconds Blank</h1>
            <h3>Feel Scenarios Blend</h3>
          </div>
        </div>
      </div>


      {/* We have the about us section here */}
      <div class="aboutus" id="idAboutUs">
        <h3>ABOUT US</h3>
        <p>Five Seconds Blank Productions Private Limited is an audio-visual production
          company based out of Delhi and is expanding operations all over India. We aim to entertain 
          and inform our audience by producing a variety of relatable content while maintaining an artistic 
          and creative perspective.
        </p>
      </div>

      
      <div class="lol divfortestimonial" id="idTestimonial">
        <h2 class="testis">
          TESTIMONIALS
        </h2>
        <div class="lold">
        Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
        </div>
      </div>
      
    </div>
  );
}

export default App;
