import React from 'react';
import './App.css';

function gimmethequote(){
  console.log("getting the quote");
}

function App() {
  return (
    <div class="body">

      <div class="floatingbutton" onClick={gimmethequote}>Get quote</div>


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
      <div class="aboutus">
        <h3>ABOUT US</h3>
        <p>Five Seconds Blank Productions Private Limited is an audio-visual production
          company based out of Delhi and is expanding operations all over India. We aim to entertain 
          and inform our audience by producing a variety of relatable content while maintaining an artistic 
          and creative perspective.
        </p>
      </div>


      <div class="lol">
        <div class="testis">
          Testimonials
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo temporibus cum, consequuntur officia unde eligendi quibusdam laudantium nemo perspiciatis modi animi, earum voluptas asperiores repudiandae, architecto ullam qui fugiat!</div>

      </div>
    </div>
  );
}

export default App;
