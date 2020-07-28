import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ITEMS } from "../../data";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Tabs from "@material-ui/core/Tabs";

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
    textAlign: "center",
  },
  imageDiv: {
    height: 150,

    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  productGroup: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    marginBottom: "2vh",
    width: "90vw",
    borderRadius: 5,
    boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.65)",
  },
  paperCard: {
    height: 200,
    width: 180,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Group({ item }) {
  const classes = useStyles();
  return (
    <Grid item lg={2} className={classes.root} md={6} key={item.id}>
      <Paper
        style={{
          height: 200,
          width: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={0}
      >
        <div className={classes.imageDiv}>
          <img
            src={item.image}
            alt={item.name}
            height={140}
            className={classes.image}
          />
        </div>
        <Typography variant="caption">{item.name}</Typography>
        <Typography varient="subtitle1" style={{ color: "green" }}>
          only ₹{item.price}
        </Typography>
      </Paper>
    </Grid>
  );
}

function RenderProductGroup({ items }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  if (!matches) {
    return (
      <div
        className={classes.productGroup}
        style={{ backgroundColor: "inherit" }}
      >
        <Grid item lg={2} className={classes.root} md={6}>
          <Paper className={classes.paperCard} elevation={0}>
            <LocalFloristIcon />
            <Typography variant="button">{items[0].category}</Typography>
            <Typography variant="button" color="textSecondary">
              limited offer
            </Typography>
            <Typography variant="caption" color="error">
              1 day 2hrs 59min left
            </Typography>
          </Paper>
        </Grid>
        {items.map((item) => (
          <div key={item.id}>
            <Group item={item} />
          </div>
        ))}
        <Grid item lg={2} className={classes.root} md={6}>
          <Paper className={classes.paperCard} elevation={0}>
            <IconButton size="medium" edge="end">
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
            <Typography variant="subtitle1" color="textSecondary">
              View All
            </Typography>
          </Paper>
        </Grid>
      </div>
    );
  } else {
    return (
      <div
        className={classes.productGroup}
        style={{ backgroundColor: "white" }}
      >
        <Tabs variant="scrollable" scrollButtons="desktop">
          <Grid item lg={2} className={classes.root} md={6}>
            <Paper className={classes.paperCard} elevation={0}>
              <LocalFloristIcon />
              <Typography variant="button">{items[0].category}</Typography>
              <Typography variant="button" color="textSecondary">
                limited offer
              </Typography>
              <Typography variant="caption" color="error">
                1 day 2hrs 59min left
              </Typography>
            </Paper>
          </Grid>
          {items.map((item) => (
            <div key={item.id}>
              <Group item={item} />
            </div>
          ))}
          <Grid item lg={2} className={classes.root} md={6}>
            <Paper className={classes.paperCard} elevation={0}>
              <IconButton size="medium" edge="end">
                <ArrowForwardIosIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle1" color="textSecondary">
                View All
              </Typography>
            </Paper>
          </Grid>
        </Tabs>
      </div>
    );
  }
}

export default class Products extends Component {
  render() {
    const speakers = ITEMS.filter((item) => item.category === "speakers");
    const mobiles = ITEMS.filter((item) => item.category === "mobiles");
    const men = ITEMS.filter((item) => item.category === "men");
    const women = ITEMS.filter((item) => item.category === "women");
    return (
      <div>
        <RenderProductGroup items={speakers} />
        <RenderProductGroup items={mobiles} />
        <RenderProductGroup items={men} />
        <RenderProductGroup items={women} />
      </div>
    );
  }
}