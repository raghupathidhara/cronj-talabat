import { Grid } from "@mui/material";
import React from "react";
import Orders from '../Orders'

function index({ table }) {
  return (
    <Grid container>
      {table && (
        <Grid container>
          <Grid item container>
            {table.title}
          </Grid>
          <Grid item container>
            <Grid item container>Details</Grid>
            {/* Details */}
          </Grid>
          <Grid item container>
            <Grid item container>Orders</Grid>
            <Orders orders={table.orders}/>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default index;
