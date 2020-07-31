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
import { Link } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./carousel.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
    height: 50,
    color: "white",
    fontSize: 18,
  },
}));

function RenderDetalis() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  const location = useLocation();
  const [fav, setFav] = useState(false);
  const item = location.state;
  return (
    <Grid className="detail" container justify="center">
      <Grid item lg={6} md={12} className="detail-box-image-grid">
        <Paper elevation={0} className="detail-box-image">
          {!matches ? ( // Title and Rating for mobile
            <h5 style={{ padding: 20 }}>
              {item.fullName}
              <span
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "0px 3px",
                  borderRadius: 5,
                  margin: 3,
                }}
              >
                <span>{item.rating} *</span>
              </span>
            </h5>
          ) : null}
          {matches ? ( // Favorite Icon for Desktop
            <div className="rating" style={{ justifyContent: "flex-end" }}>
              <IconButton
                color="secondary"
                onClick={() => {
                  setFav(!fav);
                }}
                style={{ marginRight: 50 }}
              >
                {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </div>
          ) : null}
          <img src={item.image} alt={item.name} className="detail-image" />
          {!matches ? ( // Favorite Icon for Mobiles
            <div
              className="rating"
              style={{ justifyContent: "flex-end", marginRight: 20 }}
            >
              <IconButton
                color="secondary"
                onClick={() => {
                  setFav(!fav);
                }}
              >
                {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </div>
          ) : null}
          {matches ? (
            <div>
              <Button
                variant="contained"
                className={classes.button}
                style={{
                  width: matches ? 250 : "85vw",
                  backgroundColor: "#ff9f00",
                }}
                startIcon={<ShoppingBasketIcon fontSize="large" />}
              >
                Add TO CART
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                style={{
                  width: matches ? 250 : "85vw",
                  backgroundColor: "#fb7534",
                }}
                startIcon={<OfflineBoltIcon />}
              >
                BUY NOW
              </Button>
            </div>
          ) : null}
        </Paper>
      </Grid>
      <Grid item lg={6} md={12}>
        <Paper elevation={0} className="detail-box-details">
          {matches ? ( // Full name only in Desktop
            <Typography
              variant="h5"
              className="detail-title"
              color="textPrimary"
            >
              {item.fullName}
            </Typography>
          ) : null}
          <Typography variant="subtitle2" style={{ color: "red", padding: 4 }}>
            Special price ends in less than 16h:37m
          </Typography>
          <div className="item-price">
            <Typography
              variant="h4"
              className="selling-price"
              color="textPrimary"
            >
              ₹{item.price}
            </Typography>
            <Typography
              variant="subtitle1"
              className="original-price"
              color="textSecondary"
            >
              ₹<s style={{ color: "gray" }}>{item.originalPrice}</s>
            </Typography>
          </div>
          {matches ? (
            <div className="ratings-and-reviews">
              <div className="rating-icon">
                <p>{item.rating}</p>
                <StarRate className="rating-star" fontSize="small" />
              </div>
              <span
                style={{
                  padding: "0px 5px",
                  color: "gray",
                  fontWeight: 500,
                }}
              >{` 648 ratings and 98 reviews`}</span>
            </div>
          ) : null}
          <div style={{ margin: "10px 0px" }}>
            <Typography variant="button">Available Colors</Typography>
            <div className="avail-colors">
              {item.colors.map((color, i) => {
                const colors = color.split(" ").join("");
                return (
                  <Typography variant="subtitle1" key={i}>
                    <Tooltip
                      title={color}
                      placement="top"
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <div
                        className="round"
                        style={{
                          backgroundColor: `${colors}`,
                          boxShadow: `0px 3px 7px 0px ${colors}`,
                        }}
                      ></div>
                    </Tooltip>
                  </Typography>
                );
              })}
            </div>
          </div>

          {item.warranty ? (
            <div style={{ display: "flex", padding: "2px 5px 0px 1px" }}>
              <VerifiedUserIcon
                color="primary"
                style={{ padding: "2px 5px 0px 1px" }}
              />
              <Typography variant="subtitle2" className="detail-title">
                This is a genuine product of {item.name}. The product comes with
                a standard brand warranty of
                <strong> {item.warrantyDuration}</strong>.
              </Typography>
            </div>
          ) : null}
          {!matches ? (
            <div style={{ padding: "20px 0px" }}>
              <Button
                variant="contained"
                className={classes.button}
                style={{
                  width: matches ? 250 : "85vw",
                  backgroundColor: "#ff9f00",
                }}
                startIcon={<ShoppingBasketIcon fontSize="large" />}
              >
                Add TO CART
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                style={{
                  width: matches ? 250 : "85vw",
                  backgroundColor: "#fb7534",
                }}
                startIcon={<OfflineBoltIcon />}
              >
                BUY NOW
              </Button>
            </div>
          ) : null}
          <div className="description">
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ padding: "0px 10px 0px 0px" }}
            >
              Description
            </Typography>
            <Typography variant="body2" className="detail-title">
              {item.description}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default class ProductDetails extends Component {
  render() {
    return <RenderDetalis />;
  }
}
