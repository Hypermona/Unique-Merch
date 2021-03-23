import React, { Suspense, lazy } from "react";
import Header from "./Header/Header";
import MainBody from "./Body/MainBody";
import { Switch, Route, Redirect } from "react-router-dom";
// import MoreProducts from "./Body/MoreProducts";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// import Backdrop from "@material-ui/core/Backdrop";

const ProductDetails = lazy(() => import("./Body/ProductDetails")); //loding only when it is needed
const MoreProducts = lazy(() => import("./Body/MoreProducts")); //loding only when it is needed
const Favorites = lazy(() => import("./Body/Favorites")); //loding only when it is needed
const Cart = lazy(() => import("./Body/Cart")); //loding only when it is needed
const CheckOut = lazy(() => import("./Body/CheckOut")); //loding only when it is needed
const TrackOrder = lazy(() => import("./Body/TrackOrder")); //loding only when it is needed
const Address = lazy(() => import("./Body/Address")); //loding only when it is needed
const SignInSide = lazy(() => import("./Header/SignIn")); //loding only when it is needed
const SignUp = lazy(() => import("./Header/SignUp")); //loding only when it is needed
const UnderConstructionPage = lazy(() =>
  import("./Body/UnderConstructionPage")
); //loding only when it is needed
function Main() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  });
  return (
    <>
      {" "}
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Suspense
          fallback={
            <div
              style={{
                height: "95vh",
                width: "95vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                color="inherit"
                size={40}
                thickness={4}
                variant="indeterminate"
              />
              Loading...
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={MainBody} />
            <Route exact path="/more" component={MoreProducts} />
            <Route exact path="/details" component={ProductDetails} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/payment" component={UnderConstructionPage} />
            <Route exact path="/address" component={Address} />
            <Route exact path="/offers" component={UnderConstructionPage} />
            <Route
              exact
              path="/customerService"
              component={UnderConstructionPage}
            />
            <Route exact path="/account" component={UnderConstructionPage} />
            <Route exact path="/settings" component={UnderConstructionPage} />
            <Route exact path="/details/checkOut" component={CheckOut} />
            <Route exact path="/trackOrders" component={TrackOrder} />
            <Route exact path="/signIn" component={SignInSide} />
            <Route exact path="/signUp" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default Main;
