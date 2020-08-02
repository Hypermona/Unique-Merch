import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";

export default class MainDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    return (
      <div>
        <List component="nav">
          <Typography variant="h5">UniqueMerch</Typography>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/cart"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Go To Cart" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/favorites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Wish List" />
            </ListItem>
          </NavLink>
          <NavLink
            to="/trackOrders"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Your Order" />
            </ListItem>
          </NavLink>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Method" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonPinCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Change Locations" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="Special Offers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Customer Service" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Your Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Other Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
        </List>
      </div>
    );
  }
}
