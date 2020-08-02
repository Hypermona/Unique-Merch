import React, { Suspense, lazy } from "react";
import Header from "./Header/Header";
import MainBody from "./Body/MainBody";
import { Switch, Route, Redirect } from "react-router-dom";
// import MoreProducts from "./Body/MoreProducts";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Backdrop from "@material-ui/core/Backdrop";

const ProductDetails = lazy(() => import("./Body/ProductDetails")); //loding only when it is needed
const MoreProducts = lazy(() => import("./Body/MoreProducts")); //loding only when it is needed
const Favorites = lazy(() => import("./Body/Favorites")); //loding only when it is needed
const Cart = lazy(() => import("./Body/Cart")); //loding only when it is needed
const CheckOut = lazy(() => import("./Body/CheckOut")); //loding only when it is needed
const TrackOrder = lazy(() => import("./Body/TrackOrder")); //loding only when it is needed
function Main() {
  return (
    <>
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
          <Route exact path="/checkOut" component={CheckOut} />
          <Route exact path="/trackOrders" component={TrackOrder} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default Main;
