import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import StarRate from "@material-ui/icons/StarRate";
import { NavLink } from "react-router-dom";
import "./carousel.css";

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
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  productGroup: {
    display: "flex",
    flexWrap: "wrap",
    margin: "2vh auto",
    width: "90vw",
    borderRadius: 5,
    boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.65)",
  },
}));

function Group({ item }) {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  return (
    <Grid item lg={2} className={classes.root} md={6} key={item.id}>
      <Paper
        style={{
          height: 250,
          width: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={0}
      >
        <div className="rating">
          <div className="rating-icon">
            <p>{item.rating}</p>
            <StarRate className="rating-star" fontSize="small" />
          </div>
          <IconButton
            color="secondary"
            onClick={() => {
              setFav(!fav);
            }}
          >
            {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
        <NavLink
          to={{ pathname: "/details", state: item }}
          style={{ textDecoration: "none" }}
        >
          <div className={classes.imageDiv}>
            <img
              src={item.image}
              alt={item.name}
              height={140}
              className={classes.image}
            />
          </div>
        </NavLink>
        <NavLink
          to={{ pathname: "/details", state: item }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="caption">{item.name}</Typography>
        </NavLink>
        <Typography varient="subtitle1" style={{ color: "green" }}>
          only ₹{item.price}
        </Typography>
      </Paper>
    </Grid>
  );
}

function RenderProductGroup() {
  const classes = useStyles();
  let location = useLocation();
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  return (
    <div
      className={classes.productGroup}
      style={{ backgroundColor: !matches ? "inherit" : "white" }}
    >
      <div className="product-title">
        <Typography variant="button">{location.state[0].category}</Typography>
      </div>
      {location.state.map((item) => (
        <div key={item.id}>
          <Group item={item} />
        </div>
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
