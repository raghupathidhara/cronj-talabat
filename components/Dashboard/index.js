import { Grid } from "@mui/material";
import { useState } from "react";
import Bills from "../Bills";
import Cashier from "../Cashier";

function index({ bills }) {
  const [selectedBill, setSelectedBill] = useState(0);

  

  return (
    <Grid item container>
      <Grid item container>
        <Cashier />
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 1fr",
        }}
      >
        <Grid item container>
          <Bills bills={bills} setSelectedBill={setSelectedBill} />
        </Grid>
        <Grid item container>
          Table 1
        </Grid>
      </Grid>
      <Grid item container>
        Footer
      </Grid>
    </Grid>
  );
}

export default index;
