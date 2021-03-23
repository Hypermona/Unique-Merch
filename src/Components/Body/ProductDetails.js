import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { useLocation, NavLink } from "react-router-dom";
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
import { postFavorite, deleteFavorite } from "../../Redux/ActionCreators";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { addCartItem } from "../../Redux/ActionCreators";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const mapSateToProps = (state) => {
  return {
    favorites: state.favorites,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite: (itemId) => dispatch(postFavorite(itemId)),
  deleteFavorite: (itemId) => dispatch(deleteFavorite(itemId)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
    height: 50,
    color: "white",
    fontSize: 18,
  },
}));
function RenderDetalis(props) {
  const favorites = props.favorites;
  const cart = props.cart;
  const deleteFavorite = props.deleteFavorite;
  const postFavorite = props.postFavorite;
  const addCartItem = props.addCartItem;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  const location = useLocation();
  const item = location.state;
  const cartItem = cart.some((el) => el.id === item.id);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleCart = (item) => {
    setOpen(true);
    addCartItem(item);
  };
  //this function will handel the favorites [adding and removing with appropriate mssg]
  const handleFavorites = (itemId) => {
    if (favorites.some((el) => el === itemId)) {
      deleteFavorite(itemId);
    } else {
      postFavorite(itemId);
    }
  };

  return (
    <div>
      <Grid
        className="detail scroll-view"
        container
        justify="space-around"
        style={{ position: "-webkit-sticky", position: "sticky" }}
      >
        <Grid item className="detail-box-image-grid">
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
                  onClick={() => handleFavorites(item.id)}
                  style={{ marginRight: 50 }}
                >
                  {props.favorites.some((el) => el === item.id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
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
                  onClick={() => handleFavorites(item.id, item.name, "bottom")}
                >
                  {props.favorites.some((el) => el === item.id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </div>
            ) : null}
            {matches ? (
              <div>
                {cartItem ? (
                  <NavLink to="/cart" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      style={{
                        width: matches ? 250 : "85vw",
                        backgroundColor: "#ff9f00",
                      }}
                      startIcon={<ShoppingBasketIcon fontSize="large" />}
                    >
                      GO TO CART
                    </Button>
                  </NavLink>
                ) : (
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{
                      width: matches ? 250 : "85vw",
                      backgroundColor: "#ff9f00",
                    }}
                    startIcon={<ShoppingBasketIcon fontSize="large" />}
                    onClick={() => handleCart(item)}
                  >
                    Add TO CART
                  </Button>
                )}
                <Snackbar
                  open={open}
                  autoHideDuration={4000}
                  onclose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    variant="filled"
                    severity="success"
                    onClose={handleClose}
                  >
                    {item.name} is successfuly added to your cart
                  </Alert>
                </Snackbar>
                <NavLink
                  to={{
                    pathname: "/details/checkOut",
                    state: item,
                  }}
                  style={{ textDecoration: "none" }}
                >
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
                </NavLink>
              </div>
            ) : null}
          </Paper>
        </Grid>
        <Grid item lg={6} md={12} className="scroll-view">
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
            <Typography
              variant="subtitle2"
              style={{ color: "red", padding: 4 }}
            >
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
                  This is a genuine product of {item.name}. The product comes
                  with a standard brand warranty of
                  <strong> {item.warrantyDuration}</strong>.
                </Typography>
              </div>
            ) : null}
            {!matches ? (
              <div style={{ padding: "20px 0px" }}>
                {cartItem ? (
                  <NavLink to="/cart" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      style={{
                        width: matches ? 250 : "85vw",
                        backgroundColor: "#ff9f00",
                      }}
                      startIcon={<ShoppingBasketIcon fontSize="large" />}
                    >
                      GO TO CART
                    </Button>
                  </NavLink>
                ) : (
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{
                      width: matches ? 250 : "85vw",
                      backgroundColor: "#ff9f00",
                    }}
                    startIcon={<ShoppingBasketIcon fontSize="large" />}
                    onClick={() => handleCart(item)}
                  >
                    Add TO CART
                  </Button>
                )}
                <Snackbar
                  open={open}
                  autoHideDuration={4000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Alert
                    variant="filled"
                    severity="success"
                    onClose={handleClose}
                  >
                    {item.name} is successfuly added to your cart
                  </Alert>
                </Snackbar>
                <NavLink
                  to={{
                    pathname: "/details/checkOut",
                    state: item,
                  }}
                  style={{ textDecoration: "none" }}
                >
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
                </NavLink>
              </div>
            ) : null}
            <div
              className="description"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ padding: "7px 0px", display: "flex" }}>
                <LocalOfferIcon fontSize="small" style={{ color: "green" }} />
                <Typography style={{ padding: "0px 10px" }} variant="body2">
                  Special PriceGet extra 9% off (price inclusive of discount)
                  <Link to="">T&C</Link>
                </Typography>
              </div>
              <div style={{ padding: "7px 0px", display: "flex" }}>
                <LocalOfferIcon fontSize="small" style={{ color: "green" }} />
                <Typography style={{ padding: "0px 5px" }} variant="body2">
                  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                  Card
                  <Link to="">T&C</Link>
                </Typography>
              </div>
              <div style={{ padding: "7px 0px", display: "flex" }}>
                <LocalOfferIcon fontSize="small" style={{ color: "green" }} />
                <Typography style={{ padding: "0px 5px" }} variant="body2">
                  Bank Offer10% Off on Bank of Baroda Mastercard debit card
                  first time transaction, Terms and Condition apply
                  <Link to="">T&C</Link>
                </Typography>
              </div>
              <div style={{ padding: "7px 0px", display: "flex" }}>
                <EventAvailableIcon
                  fontSize="small"
                  style={{ color: "green" }}
                />
                <Typography style={{ padding: "0px 5px" }} variant="body2">
                  No Cost EMI on Flipkart Axis Bank Credit Card
                  <Link to="">T&C</Link>
                </Typography>
              </div>
            </div>

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
            <Paper
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outlined"
            >
              <Typography variant="button" color="textSecondary">
                Temporarily disabled all the comments
              </Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

class ProductDetails extends Component {
  render() {
    return (
      <RenderDetalis
        favorites={this.props.favorites}
        postFavorite={this.props.postFavorite}
        deleteFavorite={this.props.deleteFavorite}
        {...this.props}
      />
    );
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(ProductDetails);
