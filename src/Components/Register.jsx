import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserData,googleRegister } from "../redux/action"
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import { TextField, Button } from '@material-ui/core';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: ""
        }
    }

     responseGoogle = response => {
        console.log(response);
        this.props.googleRegister({...response})
      };
      

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const { name, email, password, username, mobile, description } = this.state
        // console.log(name,email,password,username,mobile,description);
        this.props.getData({ name, email, password, username, mobile, description })
    }

    render() {
        console.log(this.props);
        const { name, email, password, username, mobile, description } = this.state
        const { isAuth } = this.props
        if (isAuth) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div >
                <form onSubmit={this.handleClick}>
                    <h4>Signup</h4>
                    {/* Name: <br/> */}
                    <TextField name="name"
                        required={true}
                        label="Enter Name"
                        value={name}
                        onChange={this.handleChange}
                        variant="outlined"
                    /><br />
                    {/* Email: <br/> */}
                    <TextField name="email"
                        required={true}
                        style={{ marginTop: "8px" }}
                        label="Enter Email"
                        value={email}
                        variant="outlined"
                        onChange={this.handleChange} /> <br />
                    {/* Password: <br/> */}
                    <TextField name="password"
                        required={true}
                        style={{ marginTop: "8px" }}
                        label="Enter Password"
                        value={password}
                        variant="outlined"
                        onChange={this.handleChange} /> <br />
                    {/* Username: <br/> */}
                    <TextField name="username"
                        required={true}
                        style={{ marginTop: "8px" }}
                        label="Enter Username"
                        value={username}
                        variant="outlined"
                        onChange={this.handleChange} /> <br />
                    {/* Mobile: <br/> */}
                    <TextField name="mobile"
                        required={true}
                        style={{ marginTop: "8px" }}
                        label="Enter Mobile"
                        value={mobile}
                        variant="outlined"
                        onChange={this.handleChange} /> <br />
                    {/* Description: <br/> */}
                    <TextField name="description"
                        required={true}
                        style={{ marginTop: "8px" }}
                        label="Enter Description"
                        value={description}
                        variant="outlined"
                        onChange={this.handleChange} /> <br />
                    <br />
                    <TextField
                        style={{ color: "white", textDecoration: "none", background: "#ff1744", borderRadius: "55px", width: "25%" }}
                        value="SignUp" type="submit" />
                </form>
                <GoogleLogin
                    clientId="66440457074-emaoovrsp87m3l3q73548k1vsafmjoeo.apps.googleusercontent.com"
                    buttonText="Login via Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
                <div style={{ marginLeft: "205px" }}>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    token: state.token,
    isLoading: state.isLoading,
    isError: state.isError,
    isAuth: state.isAuth,
    message: state.message,
    registrationError: state.registrationError
});

const mapDispatchToProps = dispatch => ({
    getData: (payload) => dispatch(registerUserData(payload)),
    googleRegister: (payload) => dispatch(googleRegister(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)