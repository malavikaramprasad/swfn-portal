import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import img from '../Swadha-Foundation-logo.png';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            redirect: false
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }
        return (
            <>
                <nav>
                    <div class="nav-wrapper">
                        <a href="/#" class="brand-logo"> <img src={img} alt="logo" /> </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="collapsible.html">Login</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="row" style={{width: '25%', marginTop: '10%'}}>
                    <div class="input-field row s3">
                        <label class="active" for="first_name2">User Name</label>
                        <input value={this.state.userName} id="first_name2" type="text" class="validate" onChange={(e) => this.setState({userName: e.target.value})}/>
                    </div>
                    <div class="input-field row s6">
                        <label class="active" for="first_name2">Password</label>
                        <input value={this.state.password} id="first_name2" type="password" class="validate" onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                    <div class="input-field row s6">
                        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleLogin}>Login
                            <i class="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </>

        );
    }

    handleLogin = () => {
        //let history = useHistory();
       // history.push('home');
       this.setState({redirect: true})
    }
}

export default Login;