"use client"
import { Button, Divider, Grid } from "@mui/material";
import React from "react";
import Orders from "../Orders";

function index({ table }) {
  return (
    <Grid
      container
      sx={{ background: "#fff", padding: "1rem", borderRadius: "1rem" }}
    >
      {table && (
        <Grid container sx={{ gap: "1rem" }}>
          <Grid
            item
            container
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item sx={{ fontSize: "2rem", fontWeight: 700, flex: 1 }}>
              {table.title}
            </Grid>
            <Grid item>
              <Grid item container gap={"1rem"}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#C02328 !important" }}
                >
                  Split Total Amount
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#C02328 !important" }}
                >
                  Payment For Selected
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#DB4437 !important" }}
                >
                  Not Paid
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{width:'100%'}}/>
          <Grid item container >
            <Grid item container sx={{ fontSize: "1.4rem", color: "#C02328" }}>
              Details
            </Grid>
            <Grid
              item
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Grid item container sx={{ color: "#A098AE" }}>
                  Order Type
                </Grid>
                <Grid item container sx={{ fontWeight: 700 }}>
                  {table.details.orderType}
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Grid item container sx={{ color: "#A098AE" }}>
                  Customer
                </Grid>
                <Grid item container sx={{ fontWeight: 700 }}>
                  {table.details.customer}
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Grid item container sx={{ color: "#A098AE" }}>
                  Guests
                </Grid>
                <Grid item container sx={{ fontWeight: 700 }}>
                  {table.details.guests}
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Grid item container sx={{ color: "#A098AE" }}>
                  Payment Method
                </Grid>
                <Grid item container sx={{ fontWeight: 700 }}>
                  {table.details.pyamentMethod
                    ? table.details.pyamentMethod
                    : "N/A"}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item container sx={{ fontSize: "1.4rem", color: "#C02328" }}>
              Orders
            </Grid>
            <Orders orders={table.orders} />
          </Grid>
          <Grid item container>
            <Grid item sx={{ flex: 1 }}>
              Discount
            </Grid>
            <Grid item sx={{ color: "#C02328" }}>
              -{table.discount}.00
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item sx={{ flex: 1, fontSize: "1.2rem", fontWeight: 700 }}>
              Total
            </Grid>
            <Grid item sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
              {table.total}.00
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid item container sx={{
            gap:'1rem',
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)'
          }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#C02328 !important" }}
            >
              Cash
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#C02328 !important" }}
            >
              QR Code
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#C02328 !important" }}
            >
              POS Machine
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#C02328 !important" }}
            >
              Loyality Point
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default index;
