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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";
import StarRate from "@material-ui/icons/StarRate";
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
    height: 250,
    width: 180,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Group(props) {
  const item = props.item;
  const favorites = props.favorites;

  const postFavorite = props.postFavorite;
  const deleteFavorite = props.deleteFavorite;
  const classes = useStyles();
  //this function will handel the favorites [adding and removing with appropriate mssg]
  const handleFavorites = (itemId) => {
    favorites.some((el) => el === itemId)
      ? deleteFavorite(itemId)
      : postFavorite(itemId);
  };
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
            onClick={() => handleFavorites(item.id)}
          >
            {favorites.some((el) => el === item.id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
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

function RenderProductGroup(props) {
  const items = props.items;
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
            <Group item={item} {...props} />
          </div>
        ))}

        <Grid item lg={2} className={classes.root} md={6}>
          <Paper className={classes.paperCard} elevation={0}>
            <NavLink
              to={{ pathname: "/more", state: items }}
              style={{ textDecoration: "none" }}
            >
              <IconButton size="medium" edge="end">
                <ArrowForwardIosIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle1" color="textSecondary">
                View All
              </Typography>
            </NavLink>
          </Paper>
        </Grid>
      </div>
    );
  } else {
    return (
      <div
        className={classes.productGroup}
        style={{
          backgroundColor: !matches ? "inherit" : "white",
          margin: "auto",
          backgroundImage: "linear-gradient(#3f50b5,white)",
          marginBottom: "1vw",
        }}
      >
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            elevation={0}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1vw 1vw",
            }}
            variant="outlined"
            square={true}
          >
            <Typography variant="h5" style={{ padding: "1vw" }}>
              <LocalFloristIcon fontSize="small" />
              {" " + items[0].category}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0.5vw 1.5vw",
              }}
            >
              <Typography variant="button" color="textSecondary">
                limited offer
              </Typography>
              <Typography variant="caption" color="error">
                1 day 2hrs 59min left
              </Typography>
            </div>
          </Paper>
        </Grid>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {items.map((item) => (
            <div key={item.id}>
              <Group item={item} {...props} />
            </div>
          ))}

          <div key={items[0].id}>
            <Group item={items[0]} {...props} />
          </div>

          <Grid item lg={2} className={classes.root} md={6}>
            <Paper className={classes.paperCard} elevation={0}>
              <NavLink
                to={{ pathname: "/more", state: items }}
                style={{ textDecoration: "none" }}
              >
                <IconButton size="medium" edge="end">
                  <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  View All
                </Typography>
              </NavLink>
            </Paper>
          </Grid>
        </div>
      </div>
    );
  }
}

class Products extends Component {
  render() {
    const speakers = ITEMS.filter((item) => item.category === "speakers");
    const mobiles = ITEMS.filter((item) => item.category === "mobiles");
    const men = ITEMS.filter((item) => item.category === "men");
    const women = ITEMS.filter((item) => item.category === "women");
    return (
      <div>
        <RenderProductGroup items={speakers} {...this.props} />
        <RenderProductGroup items={mobiles} {...this.props} />
        <RenderProductGroup items={men} {...this.props} />
        <RenderProductGroup items={women} {...this.props} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
