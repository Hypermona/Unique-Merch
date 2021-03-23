import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOrder } from "../../Redux/ActionCreators";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import "./cartAndFavorites.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as EmptyOreder } from "../../images/undraw_empty_xct9.svg";
import TrackOrderVisual from "./TrackOrderVisual";

const mapstateToProps = (state) => {
  return {
    orders: state.orders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeOrder: (itemId) => dispatch(removeOrder(itemId)),
});

function RenderOrders(props) {
  const item = props.item;
  const [track, setTrack] = React.useState(false);
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
                  View
                </Button>
              </NavLink>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 5 }}
                onClick={() => {
                  setTrack(!track);
                }}
                className="cart-button"
              >
                Track Your Order
              </Button>
              {/* <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 5 }}
                onClick={() => removeOrder(item.id)}
                className="cart-button"
              >
                Item Reached
              </Button> */}
            </>
          }
          className="list-text"
        />
      </ListItem>
      {track ? <TrackOrderVisual /> : null}
    </>
  );
}

class Orders extends Component {
  render() {
    if (this.props.orders.length === 0) {
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
            <EmptyOreder style={{ height: "40vh" }} />
          </div>
          <Typography variant="button">You Don't have Any Orders</Typography>
        </div>
      );
    } else {
      return (
        <div>
          <List className="list-body">
            {this.props.orders.map((item, i) => (
              <div key={i}>
                <RenderOrders item={item} {...this.props} />
              </div>
            ))}
          </List>
        </div>
      );
    }
  }
}
export default connect(mapstateToProps, mapDispatchToProps)(Orders);
