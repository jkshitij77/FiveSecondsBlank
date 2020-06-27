import React, { Component } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import './contactcss.css';
import Button from 'react-bootstrap/Button'
// import { findByDisplayValue } from '@testing-library/react';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        
        return (
            <div class="body">
                <RouterLink to="/"><div class="floatingbutton"> <img class="crossIcon" alt="Cross Icon" src={require('./close.png')}/></div></RouterLink>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
                
                {/* Upper part fo the page. Has the banner */}
                <div>
                    <img src={require("./conus.png")} class="contact_banner" alt="Banner" />
                </div>

                <div class="uselessContainer">
                    <div class="lowercontainer">
                        <div class="left">
                            <form>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label><br />

                                <label class="labelfont">
                                    Email:
                                    <input type="text" name="name" />
                                </label> <br />
                                  <label class="labelfont shiftup">
                                    Ideas :
                                </label>
                                <textarea type="text" name="name" /> 
                                <br />
                                <Button variant="outline-dark">Submit</Button>
                            </form>
                        </div>
                        <div class="right">
                            <h2>Address:</h2><h4>F - 20/A, Hauz Khas Enclave <br/> New Delhi,
                                 Delhi 110016 India</h4> <br />
                                <h2>Contact No:</h2> <h4>099997 83321</h4>
                        
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