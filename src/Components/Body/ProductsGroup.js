import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ITEMS } from "../../data";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  image: {
    alignSelf: "center",
  },
  imageDiv: {
    height: 150,
    width: 130,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  productGroup: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    width: "90vw",
  },
}));

function Group({ item }) {
  const classes = useStyles();
  return (
    <Grid item lg={2} className={classes.root} md={6} spacing={0}>
      <Paper
        style={{ height: 200, width: 180, alignItems: "center" }}
        elevation={0}
      >
        <div className={classes.imageDiv}>
          <img
            src={item.image}
            alt={item.name}
            height={item.height}
            width={item.width}
            className={classes.image}
          />
        </div>
        <p align="center">{item.name}</p>
      </Paper>
    </Grid>
  );
}

function RenderProductGroup() {
  const classes = useStyles();
  const result = ITEMS.filter((item) => item.trending);
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  return (
    // <Grid
    //   container
    //   direction="row"
    //   justify="center"
    //   alignItems="center"
    //   spacing={0}
    // >
    //   {result.map((item) => (
    //     <Group item={item} />
    //   ))}
    // </Grid>
    <div
      className={classes.productGroup}
      style={{ backgroundColor: !matches ? "inherit" : "white" }}
    >
      {result.map((item) => (
        <Group item={item} />
      ))}
    </div>
  );
}

export default class ProductsGroup extends Component {
  render() {
    return (
      <div>
        <RenderProductGroup />
      </div>
    );
  }
}
