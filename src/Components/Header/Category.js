import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import "./Category.css";

const useStyles = makeStyles((theme) => ({
  itemGroup: {
    flexGrow: 1,
    margin: "0 1vw",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {},
}));

// Category dropdown component
function RenderDropdown({ title }) {
  return (
    <div className="dropdown" style={{ marginRight: 10 }}>
      <button className="dropbtn">
        <Typography variant="overline">{title}</Typography>
      </button>
      <div className="dropdown-content">
        <a href="#h">item 1</a>
        <a href="#h">item 2</a>
        <a href="#h">item 3</a>
      </div>
    </div>
  );
}
function RenderDesktopCategory(props) {
  const classes = useStyles();
  return (
    <div className={classes.itemGroup}>
      <RenderDropdown title="Electronics" />
      <RenderDropdown title="TVs & Appliances" />
      <RenderDropdown title="Men" />
      <RenderDropdown title="Women" />
      <RenderDropdown title="Baby & Kids" />
      <RenderDropdown title="Home & Furniture" />
      <RenderDropdown title="Sports, Books & More" />
      <RenderDropdown title="Flights" />
      <RenderDropdown title="Offer Zone" />
    </div>
  );
}

// rendering dropdown separately for mobile
function RenderMobileCategory() {
  const classes = useStyles();
  return (
    <div className={classes.itemGroupM}>
      <RenderDropdown title="Electronics & Appliances" />
      <RenderDropdown title="Furniture" />
      <RenderDropdown title="More" />
    </div>
  );
}
export default class Category extends Component {
  render() {
    if (this.props.matches) {
      return <RenderDesktopCategory />; //if it is desktop
    } else {
      return <RenderMobileCategory />; //if it is mobile device
    }
  }
}
