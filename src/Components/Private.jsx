import React, { Component } from 'react'
import Dashboard from './Dashboard'
import {Redirect, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Invoice from "./Invoice/Invoice"
function Private() {
    var data = useSelector((state) => state)
    console.log(data);
      if(data.isAuth){
        return(
            <div>
                 <Route exact path="/dashboard" render={()=> <Dashboard/>}/> 
                 <Route path="/dashboard/create" render={()=> <Invoice/>}/>
            </div>
        )}
        else {
            alert("You are Logged out ! Please Login to get access!");
            return <Redirect to="/" />
        }
}

export default Private