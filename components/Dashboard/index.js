
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Bills from "../Bills";
import Cashier from "../Cashier";
import Footer from "../Footer/Footer";
import Table from "../Table";
import Approve from "../Approve";

function Index({ bills }) {
  const [selectedBill, setSelectedBill] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <Grid item container sx={{gap:'0.5rem'}} >
      <Grid item container sx={{width:"98%"}}>
        <Cashier showBlock={isApproved} showTotals={isApproved} />
        {isApproved ?<div></div>:  <Approve setApprove={setIsApproved} />}
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          marginBottom: "0px",
          gridTemplateColumns: "23% 75%",
         
        }}
      >
        {isApproved && (
          <>
              <Bills bills={bills} setSelectedBill={setSelectedBill} />
              <Table table={bills[selectedBill]} />
            
          </>
        )}
      </Grid>
      <Grid container sx={{width:'98%'}}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Index;