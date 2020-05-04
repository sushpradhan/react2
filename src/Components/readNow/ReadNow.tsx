import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:90
    
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ReadNow() {
  const classes = useStyles();
  const [state, setstate] = useState({ news: [] });

  //fetching data from newsapi.org

  useEffect(()=>{
    let authToken = localStorage.getItem('token');
    fetch('http://localhost:3001/api/v1/news',{
        method : 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ authToken
        }
    })
    .then(res => res.json())
    .then(data => setstate({ news: data.articles }));
  },[]);

  //setting the state to news
  const {news} = state;

  //OnReadLater - saving data to read later
  const OnReadLaterClick = (id:any) => {
    console.log(id);
    let newsToBeReadLater = news.find((newsCard:any )=> newsCard.source.id === id);
    console.log('news');
    console.log(newsToBeReadLater);
    fetch('http://localhost:3001/api/v1/news',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(newsToBeReadLater)
    }).then(res => console.log(res.json()));
  }

  //mapping newscard details to dashboard
  return (
    <Grid container direction="column" alignItems="center" justify="center" className={classes.root} data-testid="newsGrid">
    {
        news.map((newsCard: any) => 
        <Card id={newsCard.source.id} key={newsCard.source.id} onReadLaterClick = {OnReadLaterClick} image = {newsCard.urlToImage} title = {newsCard.title} author = {newsCard.author} description = {newsCard.description}/>
        )
    }
    </Grid>
  );
}