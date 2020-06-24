import React from 'react';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from './Contact.js';
import Meettheteam from './Meettheteam';

// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactDOM from 'react-dom';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function gimmethequote(){
  console.log("getting the quote");
}

function toGallery(){
  console.log("Redirect to gallery");
}

function App() {
  return (
    <div class="body">
      {/* <FontAwesomeIcon icon={faCoffee} size="3x" color="red"/> */}

      <div class="floatingbutton" onClick={gimmethequote}>Get quote</div>
      <div class="sidenavbar">
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> <img id="dangbruh"src={require("./aboutusimg.png")}></img></Link>
        <Link to="idGallery" smooth={true} offset={-70} duration={500}> <img src={require("./gallery.png")}></img></Link>
        <Link to="idClient" smooth={true} offset={-70} duration={500}> <img src={require("./customer-care.png")}></img></Link>
        <Link to="idContact" smooth={true} offset={-70} duration={500}> <img src={require("./contactbruh.png")}></img></Link>
      </div>      
      
      {/* Header part is here
          We have our banner with the text and logo here */}
          {/* Need to change this so it matches with what we want. Do we wanna do grid right here? */}
      <div class="header" id="idBanner">
        <div class="logosforside">
          <a href="https://www.facebook.com/fivesecondsblank" target="_blank" rel="noopener noreferrer"><img src={require('./facebook.png')}></img></a>
          <a href="https://instagram.com/fivesecondsblank?igshid=1d0v0u5wn51h8" target="_blank" rel="noopener noreferrer"><img src={require('./instagram.png')}></img></a>
          <a href="https://www.youtube.com/channel/UCohxO9e4rpGaQG6XSEZyZFA" target="_blank" rel="noopener noreferrer"><img src={require('./youtube.png')}></img></a>
        </div>
        <div class="insideBanner">
          <div class="pictureInsideBanner">
            <img src={require("./logo.png")} alt="Logo" class="logo"></img>
          </div>
          <div class="textInsideBanner">
            <h1 id="Title">Five <br class="brclass"/> Seconds <br class="brclass"/> Blank</h1>
            <h3>Feel Scenarios Blend</h3>
          </div>
        </div>
      </div>


      {/* We have the about us section here */}
      <div class="aboutus" id="idAboutUs">
        <h3 class="dicked">ABOUT US</h3><br />
        <p>Five Seconds Blank Productions Private Limited is an audio-visual production
          company based out of Delhi and is expanding operations all over India. We aim to entertain 
          and inform our audience by producing a variety of relatable content while maintaining an artistic 
          and creative perspective.
        </p>
        <br />
        <div class="dabbasand">
        <h3 class="lildabba">
          <img src={require("./TGC.png")} alt="Logo" class="logo" width="auto" ></img> <br />
          <br /> San.D <br />
        <div class="lulli">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maxime, veniam adipisci odio ab magni, aspernatur pariatur obcaecati reprehenderit modi eos! Modi soluta doloremque vitae mollitia natus minima voluptatum id?laudantium, minus dolore!</div>
        </h3>
        <h3 class="lildabba">
        <img src={require("./TGC.png")} alt="Logo" class="logo" ></img> <br />
        <br /> The Groovin' Cat <br />
        <p class="lulli">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quibusdam debitis porro, magnam ex at corporis repellendus! Provident, mollitia. Maxime debitis distinctio aspernatur voluptas eius labore mollitia laudantium, minus dolore!</p>
        </h3>
        </div>
      </div>

      {/* We have the gallery section here */}
      {/* <div class="gallerycontainer">
        <div class="gallery" id="idGallery">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={require("./10 copy.jpg")}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={require("./14 copy.jpg")} alt="Image two" />}
            position={20}
          />
        </div>
      </div> */}
      {/* Have a button that takes us to gallery. Can not have the same functionality with the image */}
        {/* onClick={toGallery} */}
      
      {/* <div class="lol divfortestimonial" id="idTestimonial">
        <h2 class="testis">
          TESTIMONIALS
        </h2>
        <div class="lold">
        Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
        </div>
      </div> */}

      {/* Just trying the contact component right here
      Have something to redirect us to the contact component 
      Add the phone call thign to that component
      <Contact />
      <Meettheteam /> */}

      <div class="clients" id="idClient">

      </div>

      {/* Section for gallery */}
      <div class="gallerySection" id="idGallery">
        <div class="box1"><p>BRO</p></div>
        <div class="box2"><p>BRO</p></div>
        <div class="box3"><p>BRO</p></div>
        <div class="box4"><p>BRO</p></div>
        <div class="box5"><p>BRO</p></div>
        <div class="box6"><p>BRO</p></div>
        <div class="box7"><p>BRO</p></div>
      </div>

      <hr class="divider"/>


      {/* Footer starts here */}
      <body>
        <section class="lilfootie">
          <div class="foot"></div>
          <footer>
              <div class="main_foot">
                  <div claas="foot_head">
                      <h3>Quick Links</h3>
                      <br />
                      <ul>
                          <li><Link class="list_foot_color" to="idBanner" smooth={true} offset={-70} duration={500}> <a>Home</a> </Link></li>
                          <br />
                          <li><Link class="list_foot_color" to="idAboutUs" smooth={true} offset={-70} duration={500}> <a>About</a> </Link></li>
                          <br />
                          <li><Link class="list_foot_color" to="idGallery" smooth={true} offset={-70} duration={500}> <a>Gallery</a> </Link></li>
                          <br />
                          <li><Link class="list_foot_color" to="idClient" smooth={true} offset={-70} duration={500}> <a>Clients</a> </Link></li>
                          <br />
                          {/* <li><a class="list_foot_color" href="#">About</a></li>
                          <br />
                          <li><a class="list_foot_color" href="#">Gallery</a></li>
                          <br />
                          <li><a class="list_foot_color" href="#">Clients</a></li>
                          <br /> */}
                      </ul>
                  </div>
                  <div class="foot_head">
                      <h3>Social Networks</h3>
                      <br />
                      <ul>
                          <li><a class="list_foot_color" href="https://instagram.com/fivesecondsblank?igshid=1d0v0u5wn51h8" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                          <br />
                          <li><a class="list_foot_color" href="https://www.facebook.com/fivesecondsblank" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                          <br />
                          <li><a class="list_foot_color" href="http://www.google.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                          <br />
                          <li><a class="list_foot_color" href="http://www.google.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                          <br />
                      </ul>
                  </div>
                  <div class="foot_head">
                      <h3>Contact</h3>
                      <h4>Address:</h4>
                      <br />
                      <p>F - 20/A, Hauz Khas Enclave New Delhi, Delhi 110016 India</p>
                      <br />
                      <h4>Phone:</h4>
                      <br />
                      <p>+91 7755000005</p>
                      <br />
                      <h4>Email:</h4>
                      <br />
                      <p>lol@gmail.lol.com</p>
                      <br />
                  </div>
              </div>
          </footer>
      </section>

      </body>

      {/* Footer ends here */}
      
    </div>
  );
}

export default App;
