import React from 'react';
import './App.css';

function App() {
  return (
    <div class="body">
      {/* Header part is here
          We have our banner with the text and logo here */}
      <div class="header">
        <div class="insideBanner">
          <div class="pictureInsideBanner">
            <img src={require("./ghoulc.jpg")} alt="Logo" class="logo"></img>
          </div>
          <div class="textInsideBanner">
            <h1>Five seconds blank</h1>
            <h3>Blend my shit</h3>
          </div>
        </div>
      </div>


      {/* We have the about us section here */}
      <div class="aboutus">
        
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
