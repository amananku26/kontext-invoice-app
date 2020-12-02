import React, { Component } from 'react'
// import Dashboard from './Dashboard'
import {Route} from 'react-router-dom'
import Login from "./Login"
import {connect} from 'react-redux'
import Register from "./Register"
import Private from "./Private"
import {getUserData} from "../redux/action"
import NavBar from "./Navs/NavBar"
import { Switch } from "react-router-dom"


class Routing extends Component{

    render(){
        console.log(this.props)
        return(
            <>
            <NavBar />
            <Switch>
            <Route exact path="/" render={()=> <Login />} />
            <Route path="/signup" render={()=> <Register/>}/>
            <Route path="/dashboard" render={()=> <Private/>}/>
            </Switch>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    token:state.token,
    isLoading:state.isLoading,
    isError:state.isError,
    isAuth:state.isAuth,
    error:state.error
  });
const mapDispatchToProps = dispatch => ({
    getData:(payload)=> dispatch(getUserData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Routing)