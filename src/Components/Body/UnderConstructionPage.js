import { Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as UnderConstructionSvg } from "../../images/undraw_programming_2svr.svg";

export default function UnderConstructionPage() {
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
        <UnderConstructionSvg style={{ height: "50vh" }} />
      </div>
      <Typography variant="button">Page Is Under Construction</Typography>
    </div>
  );
}
