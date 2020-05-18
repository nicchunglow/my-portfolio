import React from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  CardMedia,
  CardHeader,
  Card,
  CardActions,
  CardContent,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    width: 550,
    justifyItems: "stretch"
  },
  text: {
    width: 500 
  }
}));
const DancerNetwork = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
  <Card elevation={3} >
    <CardHeader component="h2" 
      title="Dancer Network"
      subheader=" Saw a problem with how the dance community tries to organize and share event information. Built an event-creator to post all the different events, starting with Singapore."
    />
    <CardContent className={classes.imageFlex}>
      <CardMedia
        className={classes.media}
        image="https://media.giphy.com/media/kE3lW4IR0K3scWfkIv/giphy.gif"
        title="Gif 2"
      />
    </CardContent>
    <CardActions>
      <Link href="https://dancer-network.netlify.app" target="_blank">
        <Button variant="contained" color="primary">
          Click to site
        </Button>
      </Link>
    </CardActions>
  </Card>
  </Container>
  )
}

export default DancerNetwork