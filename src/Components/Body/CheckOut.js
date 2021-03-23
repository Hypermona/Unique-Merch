import React from "react";
import { connect } from "react-redux";
import { addorder } from "../../Redux/ActionCreators";
import "./cartAndFavorites.css";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { useLocation, Redirect, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DetailsStep from "./StepperComponents/DetailsStep";
import PaymentStep from "./StepperComponents/PaymentStep";
import SuccessStep from "./StepperComponents/SuccessStep";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addorder: (itemId) => dispatch(addorder(itemId)),
});
// used by stepper
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
}));

function getSteps() {
  return ["Item Details", "Make Payment", "Review"];
}

function getStepContent(
  stepIndex,
  item,
  itemCount,
  setItemCount,
  totalPrice,
  setTotalPrice
) {
  switch (stepIndex) {
    case 0:
      return (
        <DetailsStep
          item={item}
          itemCount={itemCount}
          setItemCount={setItemCount}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      );
    case 1:
      return (
        <PaymentStep
          item={item}
          itemCount={itemCount}
          totalPrice={totalPrice}
        />
      );
    case 2:
      return <SuccessStep item={item} />;
    default:
      return "Unknown stepIndex";
  }
}
function HandleOrder(props) {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [itemCount, setItemCount] = React.useState(1);
  const item = props.item;
  // const order = props.orders.filter((el) => el.id === item.id);
  // stepper handlers
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleOrder = () => {
    props.addorder(item);
    handleNext();
  };
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>
                {getStepContent(
                  activeStep,
                  item,
                  itemCount,
                  setItemCount,
                  totalPrice,
                  setTotalPrice
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",

                  paddingBottom: "5vh",
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                {activeStep === 0 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Make Payment
                  </Button>
                ) : activeStep === 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOrder}
                  >
                    Order Now
                  </Button>
                ) : (
                  <Link to="/trackOrders" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {"Track Your Order"}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function Order(props) {
  const location = useLocation();
  const item = location.state;
  if (!item) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <HandleOrder item={item} {...props} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
