import { Grid } from "@mui/material";
import { useState } from "react";
import Bills from "../Bills";
import Cashier from "../Cashier";
import Footer from "../Footer/Footer";
import Table from '../Table'

function index({ bills }) {
  const [selectedBill, setSelectedBill] = useState(0);


  return (
    <Grid item container sx={{height:"100%"}}>
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
          <Table table={bills[selectedBill]}/>
        </Grid>
      </Grid>
      <Grid item container sx={{marginTop:"auto"}}>
        <Footer/>
      </Grid>
    </Grid>
  );
}

export default index;
