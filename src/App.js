import React from 'react';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from './Contact.js';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Meettheteam from './Meettheteam';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ReactDOM from 'react-dom';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon icon={faCoffee} size="3x" color="red"/>

      {/* <script src="https://use.fontawesome.com/f49e083040.js"></script>
      <script src="https://kit.fontawesome.com/9f3fe80a0d.js" crossorigin="anonymous"></script> */}



      {/* <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> About</Link> */}

      <div class="floatingbutton" onClick={gimmethequote}>Get quote</div>
      <div class="sidenavbar">
        {/* <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> About</Link> */}
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> <img id="dangbruh"src={require("./aboutusimg.png")}></img></Link>
        <Link to="idGallery" smooth={true} offset={-70} duration={500}> <img src={require("./gallery.png")}></img></Link>
        <Link to="idClient" smooth={true} offset={-70} duration={500}> <img src={require("./customer-care.png")}></img></Link>
        <Link to="idContact" smooth={true} offset={-70} duration={500}> <img src={require("./contactbruh.png")}></img></Link>
      </div>      
      
      {/* Header part is here
          We have our banner with the text and logo here */}
      <div class="header">
        <div class="insideBanner">
          <div class="logosforside">
            <a href="https://www.facebook.com/fivesecondsblank" target="_blank"><img src={require('./facebook.png')}></img></a>
            <a href="https://instagram.com/fivesecondsblank?igshid=1d0v0u5wn51h8" target="_blank"><img src={require('./instagram.png')}></img></a>
            <a href="http://www.google.com" target="_blank"><img src={require('./10 copy.jpg')}></img></a>
            <a href="http://www.google.com" target="_blank"><img src={require('./10 copy.jpg')}></img></a>
          </div>
          <div class="pictureInsideBanner">
            <img src={require("./logo.png")} alt="Logo" class="logo"></img>
          </div>
          <div class="textInsideBanner">
            <h1 id="Title">Five <br class="brclass"/> Seconds <br class="brclass"/> Blank</h1>
            {/* <h1 id="Title">Seconds</h1>
            <h1 id="Title">Blank</h1> */}
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
      <Meettheteam />

      <div class="clients" id="idClient">

      </div>

      {/* Section for gallery */}
      <div class="gallerySection">
        <div class="box1"><p>BRO</p></div>
        <div class="box2"><p>BRO</p></div>
        <div class="box3"><p>BRO</p></div>
        <div class="box4"><p>BRO</p></div>
        <div class="box5"><p>BRO</p></div>
        <div class="box6"><p>BRO</p></div>
        <div class="box7"><p>BRO</p></div>
      </div>

      {/* <section id="features">
    <div class="row">
      <div class="feature-box col-lg-4">
    <FontAwesomeIcon icon="coffee" />
    <h3>Easy to use.</h3>
    <p>So easy to use, even your dog could do it.</p>
    </div>
    <div class="feature-box col-lg-4">
    <i class="fas fa-bullseye fa-4x icons"></i>
    <h3>Elite Clientele</h3>
    <p>We have all the dogs, the greatest dogs.</p>
  </div>
    <div class="feature-box col-lg-4">
    <i class="fas fa-heart fa-4x icons"></i>
    <h3>Guaranteed to work.</h3>
    <p>Find the love of your dog's life or your money back.</p>
  </div>
  </div>
  </section> */}
      
    </div>
  );
}

export default App;
