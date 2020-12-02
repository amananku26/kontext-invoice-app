import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { getUserData,googleRegister } from "../redux/action"
import { GoogleLogin } from "react-google-login";
import TextField from '@material-ui/core/TextField';
import "./input.css"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
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

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        //    console.log(username,password);
        this.props.getData({ username, password })
    }

    render() {
        const { username, password } = this.state
        //    console.log(this.props,"login");
        const { isAuth } = this.props
        if (isAuth) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="parentOfLogin">
                <h4>Kontext Login</h4>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name="username"
                        label="Enter Username"
                        value={username}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <br />
                    <TextField name="password"
                        label="Enter Password"
                        value={password}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <br />
                    <TextField style={{ color: "white", padding:"7px", textDecoration: "none", background: "#ff1744", borderRadius: "55px", width: "25%" }} type="submit"
                        value="Login"
                    />
                </form>
                <br/>
                <GoogleLogin
                    clientId="66440457074-t6981od1ephcuu5989c0laagu2oakv8g.apps.googleusercontent.com"
                    buttonText="Login via Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    isLoading: state.isLoading,
    isError: state.isError,
    isAuth: state.isAuth,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    getData: (payload) => dispatch(getUserData(payload)),
    googleRegister: (payload) => dispatch(googleRegister(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)