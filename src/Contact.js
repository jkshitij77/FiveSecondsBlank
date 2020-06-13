import React, { Component } from 'react';
import './contactcss.css';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div class="body">
                <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>
                
                {/* Upper part fo the page. Has the banner */}
                <div>
                    <img src={require("./conus.png")} class="contact_banner"></img>
                </div>
                
                {/* Lower part of the contact page */}
                {/* <div class="details" >
                    <p>Fill This <br />Form Below</p>
                    <div class="formalignleft">
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
                                Thots:
                                <textarea type="text" name="name" />
                            </label> <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                    <div class="formalignright">
                    <p>Contact No.: 099997 83321</p>
                        <p>Address: F - 20/A, Hauz Khas Enclave
                            New Delhi, Delhi 110016
                            India
                        </p>
                    </div>
                </div> */}

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
                                    Thots:
                                    <textarea type="text" name="name" />
                                </label> <br />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div class="right">
                            <p>Contact No.: 099997 83321</p>
                            <p>Address: F - 20/A, Hauz Khas Enclave
                                New Delhi, Delhi 110016
                                India
                            </p>
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