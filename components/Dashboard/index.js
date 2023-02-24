import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Bills from "../Bills";
import Cashier from "../Cashier";
import Footer from "../Footer/Footer";
import Table from "../Table";
import Approve from "../Approve";

function index({ bills }) {
  const [selectedBill, setSelectedBill] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <Grid item container sx={{ height: "100%", width: "100%" }}>
      <Grid item container>
        <Cashier showBlock={isApproved} showTotals={isApproved} />
        {isApproved ?<div></div>:  <Approve setApprove={setIsApproved} />}
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          marginBottom: "0px",
          gridTemplateColumns: "1fr 2fr",
          width: "100%",
        }}
      >
        {isApproved && (
          <>
            <Grid item container>
              <Bills bills={bills} setSelectedBill={setSelectedBill} />
            </Grid>
            <Grid item container>
              <Table table={bills[selectedBill]} />
            </Grid>
          </>
        )}
      </Grid>
      <Grid container className="mt-auto">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default index;