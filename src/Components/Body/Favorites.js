import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../../Redux/ActionCreators";
import { ITEMS } from "../../data";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cartAndFavorites.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as EmptyWishlist } from "../../images/undraw_Wishlist_re_m7tv.svg";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (itemId) => dispatch(deleteFavorite(itemId)),
});

function RenderFavorites(props) {
  const item = props.item;
  const deleteFavorite = props.deleteFavorite;
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
                <Button variant="contained" color="primary">
                  View More Details
                </Button>
              </NavLink>
            </>
          }
          className="list-text"
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteFavorite(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

class Favorites extends Component {
  render() {
    const favItems = ITEMS.filter((el) =>
      this.props.favorites.some((fa) => fa === el.id)
    );
    console.log(favItems);
    if (this.props.favorites.length === 0) {
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
            <EmptyWishlist style={{ height: "35vh" }} />
          </div>
          <Typography variant="button">Your Wishlist Is Empty</Typography>
        </div>
      );
    } else {
      return (
        <div>
          <List className="list-body">
            {favItems.map((item, i) => (
              <div key={i}>
                <RenderFavorites item={item} {...this.props} />
              </div>
            ))}
          </List>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
