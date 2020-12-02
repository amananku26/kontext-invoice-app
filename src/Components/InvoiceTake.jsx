import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 3fr)',
        gridGap: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function InvoiceTake(props) {
    const classes = useStyles();
    var data = useSelector((state) => state)
    console.log(data);
    console.log(props)

    return (
        <div>
            <Typography variant="h6" component="h6" gutterBottom>
                Invoice App
            </Typography>
            <Grid container spacing={2} justify="center">

                <Grid item xs={12} sm={8}>
                    <Paper style={{ height: "100vh", background: "#F0EBEC" }} >
                        <h4>From</h4>
                        <TextField id="outlined-basic" label="Enter Company Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Adress" variant="outlined" />
                        <br />
                        <h4>To</h4>
                        <TextField id="outlined-basic" label="Enter Company Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
                        <div>  <TextField type="date" id="outlined-basic"  variant="outlined" />
                        &#8594; <TextField type="date" id="outlined-basic"  variant="outlined" />
                        </div>
                         
                    </Paper>
                </Grid>
                <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                    <Grid item>
                        <Paper style={{ height: "49vh", background: "#A9E1FF" }} />
                    </Grid>
                    <Grid item>
                        <Paper style={{ height: "49vh", background: "#F78892" }} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default InvoiceTake