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
                
                <div>
                    <img src={require("./conus.png")} class="contact_banner"></img>
                </div>
                
                <div class="details" >
                    Fill This Form Below
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
                        <h2>Contact No.: 099997 83321</h2>
                        <h2>Address: F - 20/A, Hauz Khas Enclave
                            New Delhi, Delhi 110016
                            India
                        </h2>
                    </div>

                    {/* Kshitij bhai yeh dekhlo*/}
                    {/*<h2 class="normalconts">
            <h2>Contact No.: 099997 83321</h2>
            <h2>Address: F - 20/A, Hauz Khas Enclave
                New Delhi, Delhi 110016
                India
            </h2>
 
          </h2>*/}

                </div>
            </div>
        );
    }
}

export default Contact;