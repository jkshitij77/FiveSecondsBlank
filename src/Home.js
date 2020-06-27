import React, { Component } from 'react';
import './App.css';
import {Link as RouterLink} from 'react-router-dom';
import { Link } from "react-scroll";
import { MdLocationOn } from "react-icons/md";
import { TiPhone } from "react-icons/ti"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';

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
      {/* Floating buttons right here. Get quote and map and phone */}
      <RouterLink to="/Contact"><Button variant="info" onClick={this.gimmethequote}>Get quote</Button></RouterLink>
      <div class="darkbuttonholder">
        <Button variant="light"><a href="https://www.google.com/maps/place/Five+Seconds+Blank+Productions+Pvt.+Ltd/data=!3m1!4b1!4m2!3m1!1s0x390ce371ce7d77ab:0x9c73b9cf3c766e7b" target="_blank" rel="noopener noreferrer"><MdLocationOn size={50} color={"#23272B"}/></a></Button>
        <Button variant="light"><a href="tel:+917755000005" rel="noopener noreferrer"><TiPhone size={50} color={"#23272B"}/></a></Button>
  </div>
 


      {/* Side Nav Bar */}
      <div class="sidenavbar">
        <Link to="idAboutUs" smooth={true} offset={-70} duration={500}> <img id="dangbruh"src={require("./aboutusimg.png")} alt="aboutus"></img></Link>
        <Link to="idGallery" smooth={true} offset={-70} duation={500}> <img src={require("./gallery.png")} alt="gallery"></img></Link>
        <Link to="idClient" smooth={true} offset={-70} duration={500}> <img src={require("./customer-care.png")} alt="customer"></img></Link>
        <RouterLink to="/Contact"> <img src={require("./contactbruh.png")} alt="contactus"/></RouterLink>
      </div>      
      


      {/* Header part is here We have our banner with the text and logo here */}
      <div class="header" id="idBanner">
        <div class="logosforside">
          <a href="https://www.facebook.com/fivesecondsblank" target="_blank" rel="noopener noreferrer"><img src={require('./facebook.png')} alt="facebooklogo"></img></a>
          <a href="https://instagram.com/fivesecondsblank?igshid=1d0v0u5wn51h8" target="_blank" rel="noopener noreferrer"><img src={require('./instagram.png')} alt="instagramlogo"></img></a>
          <a href="https://www.youtube.com/channel/UCohxO9e4rpGaQG6XSEZyZFA" target="_blank" rel="noopener noreferrer"><img src={require('./youtube.png')} alt="youtubelogo"></img></a>
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

            {/* -------------Meet the Team Section ----------------------*/}
        <h3>
                <Collapsible trigger="Meet the team">
                  <div>
                      <p> <img src={require("./TGC.png")} class="logoSand" width="auto" alt="person"></img> <br /> 
                            <p class="director-tt"> Director I <br/> Vishrut Pande</p>
                      </p>
                  </div>

                  <div>
                      <p> <img src={require("./TGC.png")} class="logoSand" width="auto" alt="person"></img> <br /> 
                            <p  class="director-tt"> Director I <br/> Vishrut Pande</p>
                      </p>
                  </div>
                  <div>
                      <p> <img src={require("./TGC.png")} class="logoSand" width="auto" alt="person"></img> <br /> 
                            <p   class="director-tt" > Director I <br/> Vishrut Pande</p>
                      </p>
                  </div>
                  <div>
                      <p> <img src={require("./TGC.png")} class="logoSand" width="auto" alt="person"></img> <br /> 
                            <p   class="director-tt"> Director I <br/> Vishrut Pande</p>
                      </p>

                  </div>
                  
                </Collapsible>
                
          </h3>
          {/* -------------Meet the Team Section ----------------------*/}

        </div>

      
      
          
      {/* Section for gallery */}
      <div class="randoGalleryDiv">
      <h1 class="galleryText" >Gallery</h1>
      <div class="gallerySection" id="idGallery">
      <RouterLink to={{pathname: "/Gallery", aboutProps: {whereFrom: 1} }}>
        <div class="box1" onMouseEnter={()=>{ this.setState({activeBox: 1})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')} alt="galleryimg"/></figure></div>
      </RouterLink>
        <div class="box2" onMouseEnter={()=>{ this.setState({activeBox: 2})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')} alt="galleryimg"/></figure></div>
        <div class="box3" onMouseEnter={()=>{ this.setState({activeBox: 3})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')} alt="galleryimg"/></figure></div>
        <div class="box4">{box1Stuff}</div>
        <div class="box5" onMouseEnter={()=>{ this.setState({activeBox: 5})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')} alt="galleryimg"/></figure></div>
        <div class="box6">Text</div>
        <div class="box7" onMouseEnter={()=>{ this.setState({activeBox: 7})}} onMouseLeave={()=>{this.setState({activeBox: 0,})}}><figure><img class="galleryImage" src={require('./ghoulc.jpg')} alt="galleryimg"/></figure></div>
      </div>
      </div>
      {/* This is how to route with props */}
      {/* <RouterLink to={{pathname: "/Gallery", aboutProps: {whereFrom: 1} }}> </RouterLink> */}

      
      <hr class="divider"/>

      {/* Footer starts here */}
      <body>
      <div class="main_foot"> 
        <Container>
       
        <Row>
             
               <Col xs={4}>
                  
                      <h3 class="footerh3">Quick Links</h3>
                      <br />
                      <ul class="increasemargin">
                          <li><Link to="idBanner" smooth={true} offset={-70} duration={500}> <a>Home</a> </Link></li>
                          <br />
                          <li><Link to="idAboutUs" smooth={true} offset={-70} duration={500}> <a>About</a> </Link></li>
                          <br />
                          <li><Link  to="idGallery" smooth={true} offset={-70} duration={500}> <a>Gallery</a> </Link></li>
                          <br />
                          <li><Link  to="idClient" smooth={true} offset={-70} duration={500}> <a>Clients</a> </Link></li>
                          <br />
                      </ul>
                  </Col>
                  <Col xs={4}>
                      <h3 class="footerh3">Social Networks</h3>
                      <br />
                      <ul class="increasemargin">
                          <li><a href="https://instagram.com/fivesecondsblank?igshid=1d0v0u5wn51h8" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                          <br />
                          <li><a  href="https://www.facebook.com/fivesecondsblank" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                          <br />
                          <li><a  href="http://www.google.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                          <br />
                          <li><a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                          <br />
                      </ul>
                  </Col>
                  <Col xs={4}>
                      <h3 class="footerh3">Contact</h3>
                      <br/>
                      <h5>Address:</h5>
                      <p class="reducelineheight">F-20/A, Hauz Khas Enclave 110016</p><p class="reducelineheight">India</p>
                      <br />
                      <h5>Phone:</h5>
                      <p class="reducelineheight">+91 7755000005</p>
                      <br/>
                      <h5>Email:</h5>
                      <p class="reducelineheight">lol@gmail.lol.com</p>
                      <br/>
                  </Col> 
      </Row>
     
      </Container>
      </div>
     
      </body>

      {/* Footer ends here */}
      
    </div>
            </div>
    );
  }
}

export default Home;