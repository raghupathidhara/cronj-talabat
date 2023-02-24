import React from "react";

function index({ table }) {
  return <Grid container>{table && <Grid container>
        <Grid item container>{table.title}</Grid>
    </Grid>}</Grid>;
}

export default index;
