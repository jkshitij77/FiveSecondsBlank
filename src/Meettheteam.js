import React, { Component } from 'react';
import './contactcss.css';


class Meettheteam extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div class="body">
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
                
                {/* Upper part fo the page. Has the banner */}
                {/* TODO: Replace with meet the team banner */}
                <div>
                    <img src={require("./conus.png")} alt="Contact Us Banner" class="contact_banner"></img>
                </div>

                <div class="uselessContainer2">
                    <div class="rowthing">
                        <figure><img src={require('./attachments/ghoulc.jpg')} alt="p1"></img></figure>
                        <figure><img src={require('./attachments/ghoulc.jpg')} alt="p1"></img></figure>
                    </div>
                </div>


                {/* Button for calling and with added calling functionality */}
                {/* <div id="call-btn" class="visible-xs">
                    <a class="btn" href="tel:7007937472">
                    <span> 
                        <img src={require("./CALLING_ICON.png")} alt="CallingIcon"></img>
                    </span>
                    </a>
                </div> */}


        

            </div>
        );
    }
}

export default Meettheteam;