import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as MaterialUiCard} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginBottom: 25
  },
  media: {
    height: 140,
  },
  pos: {
    marginBottom: 14,
  
  },
});

export default function Card(this:any, props:any){
  const classes = useStyles();
  const onReadLaterClickHandler = (id: any) => {
    props.onReadLaterClick(id);
}
  return (
    <MaterialUiCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" data-testid="title">
          {props.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary" data-testid="author">
            {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" data-testid="description">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onReadLaterClickHandler.bind(this,props.id)} data-testid="readLater">
          Read Later
        </Button>
      </CardActions>
    </MaterialUiCard>
  );
}