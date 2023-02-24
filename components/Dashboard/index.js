import { Grid } from "@mui/material";
import { useState } from "react";
import Bills from "../Bills";
import Cashier from "../Cashier";
import Footer from "../Footer/Footer";
import Table from '../Table'
import Approve from "../Approve";

function index({ bills }) {
  const [selectedBill, setSelectedBill] = useState(0);
  const [isApproved, setIsApproved]= useState(false);

  return (
    <Grid item container sx={{height:"100%"}}>
      <Grid item container>
        <Cashier showBlock={isApproved} showTotals={isApproved} />
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "30% 1fr",
        }}
      >
        {
          isApproved ? (
            <>
            <Grid item container>
              <Bills bills={bills} setSelectedBill={setSelectedBill} />
            </Grid>
            <Grid item container>
              <Table table={bills[selectedBill]}/>
            </Grid>
            </>
          ): <Approve setApprove={setIsApproved}/>
        }
      </Grid>
      <Grid item container sx={{marginTop:"auto"}}>
        <Footer/>
      </Grid>
    </Grid>
  );
}

export default index;
