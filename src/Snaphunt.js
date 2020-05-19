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
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { cyan} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  media: {
    height: 300,
    width: 550,
  },
  imageFlex: {
    display: "flex",
    flexDirection: "row",
    flexGrow: "initial",
  },
  header: {
    backgroundColor: cyan[100],
  },
}));
const Snaphunt = () => {
  const classes = useStyles();
  return (
    <Container>
  <Card elevation={3} className={classes.root}>
    <CardHeader
    className={classes.header}
      title="Snaphunt Content Management System"
      />
      <Divider/>
    <CardHeader
      subheader="The objective of the project is to create a content management system for a new Help Centre module to enable Snaphunt users to quickly find detailed explanations of the platform’s features. The purpose of the Help Centre is to facilitate content creators in creating standardized content for consumers."
      />
    <CardContent className={classes.imageFlex}>
      <CardMedia
        className={classes.media}
        image="https://media.giphy.com/media/MaJCmvSTEffmQNMSFO/giphy.gif"
        title="Gif 2"
        />
    </CardContent>
    <CardActions>
      <Link href="https://snaphunt-demo-react.herokuapp.com/" target="_blank">
        <Button variant="contained" color="primary">
          Click to site
        </Button>
      </Link>
    </CardActions>
  </Card>
        </Container>
  )
}

export default Snaphunt