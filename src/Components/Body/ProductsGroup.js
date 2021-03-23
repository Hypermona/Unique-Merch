import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ITEMS } from "../../data";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRate from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { postFavorite, deleteFavorite } from "../../Redux/ActionCreators";
import { connect } from "react-redux";
import "./carousel.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postFavorite: (itemId) => dispatch(postFavorite(itemId)),
  deleteFavorite: (itemId) => dispatch(deleteFavorite(itemId)),
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0),
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
    borderRadius: 5,
    marginBottom: "2vh",
    boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.65)",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

function Group(props) {
  const classes = useStyles();
  const item = props.item;
  const favorites = props.favorites;
  const deleteFavorite = props.deleteFavorite;
  const postFavorite = props.postFavorite;
  //this function will handel the favorites [adding and removing with appropriate mssg]
  const handleFavorites = (itemId) => {
    favorites.some((el) => el === itemId)
      ? deleteFavorite(itemId)
      : postFavorite(itemId);
  };
  return (
    <Grid
      item
      lg={2}
      className={classes.root}
      md={6}
      key={item.id}
      style={{ margin: "1vw 0.9vw" }}
    >
      <Paper style={{ height: 250, width: 180 }} elevation={0}>
        <div className="rating">
          <div className="rating-icon">
            <p>{item.rating}</p>
            <StarRate className="rating-star" fontSize="small" />
          </div>
          <IconButton
            color="secondary"
            onClick={() => handleFavorites(item.id)}
          >
            {favorites.some((el) => el === item.id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
        <Link
          to={{ pathname: "/details", state: item }}
          style={{ textDecoration: "none" }}
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
        </Link>
        <Link
          to={{ pathname: "/details", state: item }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            className="detail-title"
          >
            {item.name}
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
}

function RenderProductGroup(props) {
  const classes = useStyles();
  const result = ITEMS.filter((item) => item.trending);
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  return (
    <div
      className={classes.productGroup}
      style={{
        backgroundColor: !matches ? "inherit" : "white",
        margin: "auto",
        backgroundImage: "linear-gradient(#3f50b5,white)",
      }}
    >
      <Grid item xs={12}>
        <Paper
          className={classes.paper}
          elevation={0}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="fire">
            <div className="fire-left">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-main">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-right">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-bottom">
              <div className="main-fire"></div>
            </div>
          </div>
          <Typography
            variant="h6"
            className="detail-title"
            style={{ marginLeft: "1vw" }}
          >
            Trending
          </Typography>
        </Paper>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {result.map((item) => (
          <div key={item.id}>
            <Group item={item} {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}

class ProductsGroup extends Component {
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          marginBottom: "2%",
        }}
      >
        <RenderProductGroup {...this.props} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsGroup);
