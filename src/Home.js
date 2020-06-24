import React, { Component } from 'react';
import './App.css';
import {Link as RouterLink} from 'react-router-dom';
import { Link, animateScroll } from "react-scroll";
import { MdLocationOn } from "react-icons/md";
import { TiPhone } from "react-icons/ti"

class Home extends Component{

    constructor(props){
      super(props);
      this.state = {activeBox: 0};
    }

    gimmethequote(){
      console.log("getting the quote");
    }
  
    toGallery(){
      console.log("Redirect to gallery");
    }

    render(){
      var box1Stuff = "Inside NO box";
      if(this.state.activeBox===1){
        box1Stuff = "Inside box 1";
      }
      else if(this.state.activeBox===2){
        box1Stuff = "Inside box 2";
      }
      else if(this.state.activeBox===3){
        box1Stuff = "Inside box 3";
      }
      else if(this.state.activeBox===5){
        box1Stuff = "Inside box 5";
      }
      else if (this.state.activeBox===7){
        box1Stuff = "Inside box 7";
      };

        return(
            <div>
                <div class="body">
      {/* <FontAwesomeIcon icon={faCoffee} size="3x" color="red"/> */}


      {/* Floating buttons right here. Get quote and map and phone */}
      <RouterLink to="/Contact"><div class="floatingbutton" onClick={this.gimmethequote}>Get quote</div></RouterLink>
      <div class="fixedButtons"> 
        <a href="https://www.google.com/maps/place/Five+Seconds+Blank+Productions+Pvt.+Ltd/data=!3m1!4b1!4m2!3m1!1s0x390ce371ce7d77ab:0x9c73b9cf3c766e7b" target="_blank"><MdLocationOn size={50} color={"#000000"}/></a>
        <a href="tel:+917755000005" target="_blank"><TiPhone size={50} color={"#000000"}/></a>
      </div>



      {/* Side Nav Bar */}
      <div class="sidenavbar">
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> <img id="dangbruh"src={require("./aboutusimg.png")}></img></Link>
        <Link to="idGallery" smooth={true} offset={-70} duration={500}> <img src={require("./gallery.png")}></img></Link>
        <Link to="idClient" smooth={true} offset={-70} duration={500}> <img src={require("./customer-care.png")}></img></Link>
        <RouterLink to="/Contact"> <img src={require("./contactbruh.png")} /></RouterLink>
      </div>      
      


      {/* Header part is here We have our banner with the text and logo here */}
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
          <img src={require("./TGC.png")} alt="Logo" class="logoSand" width="auto" ></img> <br />
          <br /> San.D <br />
        <div class="lulli">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maxime, veniam adipisci odio ab magni, aspernatur pariatur obcaecati reprehenderit modi eos! Modi soluta doloremque vitae mollitia natus minima voluptatum id?laudantium, minus dolore!</div>
        </h3>
        <h3 class="lildabba">
        <img src={require("./TGC.png")} alt="Logo" class="logoSand" ></img> <br />
        <br /> The Groovin' Cat <br />
        <p class="lulli">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quibusdam debitis porro, magnam ex at corporis repellendus! Provident, mollitia. Maxime debitis distinctio aspernatur voluptas eius labore mollitia laudantium, minus dolore!</p>
        </h3>
        </div>
      </div>

          
      {/* Section for gallery */}
      <div class="randoGalleryDiv">
      <h1 class="galleryText" >Gallery</h1>
      <div class="gallerySection" id="idGallery">
        <div class="box1" onMouseEnter={()=>{ this.setState({activeBox: 1})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')}/></figure></div>
        <div class="box2" onMouseEnter={()=>{ this.setState({activeBox: 2})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')}/></figure></div>
        <div class="box3" onMouseEnter={()=>{ this.setState({activeBox: 3})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')}/></figure></div>
        <div class="box4">{box1Stuff}</div>
        <div class="box5" onMouseEnter={()=>{ this.setState({activeBox: 5})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')}/></figure></div>
        <div class="box6">Text</div>
        <div class="box7" onMouseEnter={()=>{ this.setState({activeBox: 7})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')}/></figure></div>
      </div>
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
            </div>
    );
  }
}

export default Home;