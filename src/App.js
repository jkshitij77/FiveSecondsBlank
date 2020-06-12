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
        <p>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</p>
        <p>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</p>
        <p>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</p>
          
      </div>
    </div>
  );
}

export default App;
