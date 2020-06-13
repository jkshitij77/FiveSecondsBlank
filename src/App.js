import React from 'react';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from './Contact.js';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

function gimmethequote(){
  console.log("getting the quote");
}

function toGallery(){
  console.log("Redirect to gallery");
}

function App() {
  return (
    <div class="body">
      {/* <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> About</Link> */}

      <div class="floatingbutton" onClick={gimmethequote}>Get quote</div>
      <div class="sidenavbar">
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> About</Link>
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> Gallery</Link>
        <Link to="idTestimonial" smooth={true} offset={-70} duration={500} id="testimonallogo"> Testimonials</Link>
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> Clients</Link>
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> Contact</Link>
      </div>

        {/* <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> Services</Link> */}
        {/* <a href="#idAboutUs">About</a>
        <a href="#">Gallery</a>
        <a href="#idTestimonial" id="testimonallogo">Testimonials</a>
        <a href="#">Clients</a>
        <a href="#">Services</a>
        <a href="#">Contact</a> */}


      
      
      {/* Header part is here
          We have our banner with the text and logo here */}
      <div class="header">
        <div class="insideBanner">
          <div class="pictureInsideBanner">
            <img src={require("./ghoulc.jpg")} alt="Logo" class="logo"></img>
          </div>
          <div class="textInsideBanner">
            <h1 id="Title">Five Seconds Blank</h1>
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

      {/* We have the gallery section here */}
      <div class="gallerycontainer">
        <div class="gallery" id="idGallery">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={require("./10 copy.jpg")}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={require("./14 copy.jpg")} alt="Image two" />}
            position={20}
          />
        </div>
        {/* Have a button that takes us to gallery. Can not have the same functionality with the image */}
        {/* onClick={toGallery} */}
      </div>
      
      <div class="lol divfortestimonial" id="idTestimonial">
        <h2 class="testis">
          TESTIMONIALS
        </h2>
        <div class="lold">
        Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
        </div>
      </div>

      {/* <div class="img-comp-container">
        <div class="img-comp-img">
          <img src={require('./ghoulc.jpg')} width="300" height="200" />
        </div>
        <div class="img-comp-img img-comp-overlay">
          <img src={require('./CALLING_ICON.png')} width="300" height="200" />
        </div>
      </div> */}

      {/* Just trying the contact component right here
      Have something to redirect us to the contact component 
      Add the phone call thign to that component*/}
      <Contact />
      
    </div>
  );
}

export default App;
