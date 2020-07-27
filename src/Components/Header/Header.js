import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, fade } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Category from "./Category";

const useStyles = makeStyles((theme) => ({
  //styles
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  itemGroup: {
    flexGrow: 1,
    margin: "2vh 7vw",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    marginRight: "2vW",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

// logo component
function Logo({ matches, classes }) {
  if (matches) {
    return (
      <>
        <Typography variant="h5" className={classes.title}>
          UniqueMerch
        </Typography>
      </>
    );
  } else {
    return <></>;
  }
}

// main header component
export default function Header() {
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width
  const classes = useStyles(); //intialized styles
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Logo matches={matches} classes={classes} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button color="inherit" style={{ border: 0 }}>
            Sign Up
          </Button>
          <Button color="inherit">Login</Button>
          <IconButton color="inherit">
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid>
        <Grid container item xs={12} justify="center">
          <Paper elevation={0}>
            <Category matches={matches} />{" "}
            {/*rendering aboove category component here */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
