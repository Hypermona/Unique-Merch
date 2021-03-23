import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

function getSteps() {
  return [
    "Packed on " + new Date().toDateString(),
    "Not yet Shipped",
    "Expected Delivery, " +
      new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toDateString(),
  ];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();

  const steps = getSteps();
  const matches = useMediaQuery("(min-width:600px)"); //to calculate device width

  return (
    <Paper className={classes.paper}>
      <div className={classes.root}>
        <Stepper
          activeStep={1}
          orientation={!matches ? "vertical" : "horizontal"}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </Paper>
  );
}
