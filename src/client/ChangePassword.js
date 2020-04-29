import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from "react-router-dom";
import img from '../Swadha-Foundation-logo.png';

class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            reEnterNewPassword: ''
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }
        return(
            <>
                <nav>
                    <div class="nav-wrapper">
                        <a href="/#" class="brand-logo"> <img src={img} alt="logo" /> </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/#">Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="row" style={{ width: '25%', marginTop: '10%' }}>
                    <div class="input-field row s3">
                        <label class="active" for="first_name2"> Old Password</label>
                        <input value={this.state.userName} autocomplete="off" type="password" class="validate" onChange={(e) => this.setState({ oldPassword: e.target.value })} />
                    </div>
                    <div class="input-field row s6">
                        <label class="active" for="first_name2" >New Password </label>
                        <input value={this.state.password} id="first_name2" type="password" class="validate" onChange={(e) => this.setState({ newPassword: e.target.value })} />
                    </div>
                    <div class="input-field row s6">
                        <label class="active" for="first_name2" >Re-Enter New Password </label>
                        <input value={this.state.password} id="first_name2" type="password" class="validate" onChange={(e) => this.setState({ reEnterNewPassword: e.target.value })} />
                    </div>
                    <div class="input-field row s6">
                        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleChangePassword}> Change Password
                                <i class="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </>
        )
    }

    handleChangePassword = () => {
        //Get password from db and check against old password
        if(this.state.newPassword !== this.state.oldPassword)
            this.notify();
        this.setState({redirect: true})
    }

    notify = () => toast("Wow so easy !");
}
export default ChangePassword;