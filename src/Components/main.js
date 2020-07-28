import React, { Suspense, lazy } from "react";
import Header from "./Header/Header";
import MainBody from "./Body/MainBody";
import { Switch, Route, Redirect } from "react-router-dom";
// import MoreProducts from "./Body/MoreProducts";

const MoreProducts = lazy(() => import("./Body/MoreProducts")); //loding only when it is needed

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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route exact path="/more" component={MoreProducts} />
          {/* <Route path="/home/details" component={MainBody} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default Main;
