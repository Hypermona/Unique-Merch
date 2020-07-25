import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Category.css";

const useStyles = makeStyles((theme) => ({
  itemGroup: {
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {},
}));
function RenderDropdown({ title }) {
  return (
    <Button>
      <div class="dropdown">
        <button class="dropbtn">
          <Typography variant="overline">{title}</Typography>
        </button>
        <div class="dropdown-content">
          <a href="#h">Link 1</a>
          <a href="#h">Link 2</a>
          <a href="#h">Link 3</a>
        </div>
      </div>
    </Button>
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
      return <RenderDesktopCategory />;
    } else {
      return <RenderMobileCategory />;
    }
  }
}
