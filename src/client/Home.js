import React,  { Component } from 'react';
import img from '../Swadha-Foundation-logo.png';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            nothing: null
        }
    }
    

    render() {
        
        return(
            <>
                <nav>
                    <div class="nav-wrapper">
                        <a href="/#" class="brand-logo"> <img src={img} alt="logo"/> </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/password">Change Password</a></li>
                            <li><a href="/sessions">My Sessions</a></li>
                            <li><a href="/#">Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Mentee [ID] </span>
                                <p>
                                    <div> Name: Name1 </div>
                                    <div> Email: email@email.com </div>
                                    <div> phNo: 28927398 </div>
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="/#">Schedule Session</a>
                                <a href="/#">FeedBack</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Mentee [ID] </span>
                                <p>
                                    <div> Name: Name1 </div>
                                    <div> Email: email@email.com </div>
                                    <div> phNo: 28927398 </div>
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="/#">Schedule Session</a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">Mentee [ID] </span>
                                <p>
                                    <div> Name: Name1 </div>
                                    <div> Email: email@email.com </div>
                                    <div> phNo: 28927398 </div>
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="/#">Schedule Session</a>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Home