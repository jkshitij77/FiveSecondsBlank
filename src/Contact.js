import React, { Component } from 'react';
import {Link as RouterLink, Switch, Route} from 'react-router-dom';
import './contactcss.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="body">
                <RouterLink to="/"><div class="floatingbutton"> <img class="crossIcon" src={require('./close.png')}/></div></RouterLink>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
                
                {/* Upper part fo the page. Has the banner */}
                <div>
                    <img src={require("./conus.png")} class="contact_banner"></img>
                </div>

                <div class="uselessContainer">
                    <div class="lowercontainer">
                        <div class="left">
                            <form>
                                <label class="labelfont">
                                    Name:
                                    <input type="text" name="name" />
                                </label><br />

                                <label class="labelfont">
                                    Email:
                                    <input type="text" name="name" />
                                </label> <br />
                                <label class="labelfont">
                                    Ideas :
                                    <textarea type="text" name="name" />
                                </label> <br />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div class="right">
                            <h2><p>Address:</p> <p class="xxfloat">F - 20/A, Hauz Khas Enclave
                                New Delhi, Delhi 110016
                                India</p> <br />
                                <p>Contact No:</p> <p class="xxfloat">099997 83321</p>
                            </h2>
                            
                        
                        </div>
                    </div>
                </div>


                {/* Button for calling and with added calling functionality */}
                <div id="call-btn" class="visible-xs">
                    <a class="btn" href="tel:7007937472">
                    <span> 
                        <img src={require("./CALLING_ICON.png")} alt="CallingIcon"></img>
                    </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;