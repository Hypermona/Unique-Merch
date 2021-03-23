import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCartItem } from "../../Redux/ActionCreators";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cartAndFavorites.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as ShoppingCart } from "../../images/undraw_shopping_app_flsj.svg";

const mapstateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (itemId) => dispatch(deleteCartItem(itemId)),
});

function RenderCart(props) {
  const item = props.item;
  const deleteCartItem = props.deleteCartItem;
  const desktop = useMediaQuery("(min-width:600px)");
  return (
    <>
      <ListItem divider>
        <ListItemAvatar className="list-image">
          <img src={item.image} width={120} alt={item.name} />
        </ListItemAvatar>
        <ListItemText
          primary={item.fullName}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                style={{ margin: "20px 0px", fontSize: desktop ? 16 : 25 }}
              >
                {desktop ? item.description : "₹" + item.price}
              </Typography>
              <br></br>
              <br></br>
              <NavLink
                to={{ pathname: "/details", state: item }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="cart-button"
                >
                  View Details
                </Button>
              </NavLink>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 5 }}
                startIcon={<DeleteIcon />}
                onClick={() => deleteCartItem(item.id)}
                className="cart-button"
              >
                Remove Item
              </Button>
              <NavLink
                to={{ pathname: "/details/checkOut", state: item }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#fb7534",
                    color: "white",
                    marginLeft: 5,
                  }}
                  className="cart-button"
                >
                  Buy Now
                </Button>
              </NavLink>
            </>
          }
          className="list-text"
        />
      </ListItem>
    </>
  );
}

class Cart extends Component {
  render() {
    if (this.props.cart.length === 0) {
      return (
        <div
          style={{
            width: "100vw",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div>
            <ShoppingCart style={{ height: "40vh" }} />
          </div>
          <Typography variant="button">
            Your Cart is Empty Please Do shopping
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <List className="list-body">
            {this.props.cart.map((item, i) => (
              <div key={i}>
                <RenderCart item={item} {...this.props} />
              </div>
            ))}
          </List>
        </div>
      );
    }
  }
}
export default connect(mapstateToProps, mapDispatchToProps)(Cart);
