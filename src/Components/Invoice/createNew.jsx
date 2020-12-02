import React, { Component } from "react"
import {Link ,Route} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: "40px",
      paddingTop: "56.25%",
      marginTop:"25%",
      marginLeft:"25%"
    },
  });

function Create (props){
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://play-lh.googleusercontent.com/UsvigGKehARil6qKKLlqhBrFUnzJEQ2UNIGC2UVaExuMx1NKWefGUojGbo3GyORzv-k"
            title="Contemplative Reptile"
          />
          <CardContent>
           <Link to="/dashboard/create"> <Typography gutterBottom variant="h5" component="h2">
              Create New Invoice
            </Typography></Link>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Create