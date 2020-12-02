import React, { Component } from "react"
import {Link ,Route} from "react-router-dom"
import InvoiceTake from "./InvoiceTake"
import { useSelector } from 'react-redux'
import Create from "./Invoice/createNew"

function Dashboard (props){
    var data = useSelector((state) => state)
    console.log(data);
        console.log(props)
        return(
            <div>
                <Create />
            </div>
        )
}

export default Dashboard