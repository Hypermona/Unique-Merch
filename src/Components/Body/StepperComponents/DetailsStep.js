import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Grid, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CountUp from "react-countup";

const rupeeToNum = (rupee) => {
  const newRupee = rupee.split("");
  const finalRupee = [];
  newRupee.map((rupee) => {
    if (rupee !== ",") {
      finalRupee.push(rupee);
    }
  });
  return Number(finalRupee.join(""));
};

// const numToRupee = (x) => {
//   x = x.toString();
//   var lastThree = x.substring(x.length - 3);
//   var otherNumbers = x.substring(0, x.length - 3);
//   if (otherNumbers !== "") lastThree = "," + lastThree;
//   var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
//   return res;
// };

const totalPriceHandler = (price, item) => {
  const numPrice = rupeeToNum(price);
  // return numToRupee(numPrice * item);
  return numPrice * item;
};

export default function DetailsStep({
  item,
  itemCount,
  setItemCount,
  totalPrice,
  setTotalPrice,
}) {
  setTotalPrice(totalPriceHandler(item.price, itemCount));
  return (
    <Paper variant="outlined">
      <Grid container direction="row">
        <Grid>
          <img
            src={item.image}
            alt={item.fullName + "image"}
            height={200}
            style={{ padding: "15px 0px 0px 15px" }}
          />
        </Grid>
        <Grid xs style={{ marginLeft: "2vw" }} item>
          <Typography variant="h6">{item.fullName}</Typography>
          <Alert
            color="info"
            icon={<></>}
            style={{ maxWidth: "50vh", padding: "0" }}
          >
            Select Quantity{" "}
            <span style={{ padding: 5, backgroundColor: "#b4f1f1" }}>
              {itemCount > 0 && itemCount < 20 ? itemCount : setItemCount(1)}
            </span>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              style={{ marginLeft: "3vw" }}
            >
              <Button
                onClick={() => {
                  setItemCount(itemCount + 1);
                }}
              >
                +
              </Button>
              <Button onClick={() => setItemCount(itemCount - 1)}>-</Button>
            </ButtonGroup>
          </Alert>
          <TableContainer component={Paper} elevation={0}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>SHIPPING DETAILS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Desc</TableCell>
                  <TableCell align="right">Qty.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Price/Qty</TableCell>
                  <TableCell align="right">₹{item.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Qty</TableCell>
                  <TableCell align="right">{itemCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping Charge</TableCell>
                  <TableCell align="right">
                    <Typography variant="button">free</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell align="right">
                    <CountUp
                      end={totalPrice}
                      duration={1}
                      prefix="₹ "
                      separator=","
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
}
