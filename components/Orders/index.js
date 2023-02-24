import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const getModifiers = (order) => {
  const getItems = () => {
    return 
    <>
        {
        order.items.map((item, i) => {
               return item.modifiers.map((item, i) => (
                    <Grid
                    item
                    container
                    key={i}
                    sx={{
                        gap: "0.3rem",
                    }}
                    >
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                        backgroundColor: "#ccc !important",
                        fontSize: "0.5rem",
                        width: "fit-content",
                        }}
                    >
                        {item}
                    </Button>
                    </Grid>
                ));
            })
        }
    </>
  };

  return (
    <Grid item container gap={"0.5rem"}>
      {getItems()}
      {order.items.length > 1 && <Divider fullWidth sx={{ width: "100%" }} />}
    </Grid>
  );
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function index({ orders }) {
  return (
    <Grid container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox />
                Order Info
              </Grid>
            </TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Modifiers</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders &&
            orders.map((order, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Grid
                    item
                    container
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems:'center'
                    }}
                  >
                    <Checkbox />
                    <Grid item container>
                      <Grid item container sx={{ fontWeight: 700 }}>
                        Order #{order.id}
                      </Grid>
                      <Grid item container>
                        {order.orderInfo.time}
                      </Grid>
                      {!order.orderInfo.isPaid && (
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: "#C02328 !important",
                            fontSize: "0.5rem",
                          }}
                        >
                          Pay one
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item container gap={"0.5rem"}>
                    {order.items.map((item, i) => (
                      <>
                        <Grid
                          item
                          container
                          key={i}
                          sx={{
                            gap: "0.3rem",
                            flexWrap: "nowrap",
                            alignItems:'center'
                          }}
                        >
                          <Image
                            src="/images/coffee.png"
                            width={30}
                            height={30}
                          />
                          <Grid item>{item.itemInfo.title}</Grid>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              backgroundColor: "#C02328 !important",
                              fontSize: "0.5rem",
                              width: "fit-content",
                            }}
                          >
                            BK
                          </Button>
                          <Grid item sx={{ color: "#A098AE" }}>
                            x1
                          </Grid>
                        </Grid>
                          {order.items.length - 1 != i && (
                            <Divider fullWidth sx={{ width: "100%" }} />
                          )}
                      </>
                    ))}
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item container gap={"0.5rem"}>
                    {order.items.map((item, i) => (
                      <>
                        <Grid
                          item
                          container
                          key={i}
                          sx={{
                            gap: "0.3rem",
                            alignItems:'center',
                            flexWrap: "nowrap",
                            // alignItems:'center'
                          }}
                        >
                          {item.modifiers.map((mod, j)=>(
                            <Button
                            variant="contained"
                            size="small"
                            sx={{
                              backgroundColor:"#0000000D !important",
                              fontSize: "0.5rem",
                              width: "fit-content",
                              color:'#000'
                            }}
                          >
                            {mod}
                          </Button>
                          ))}
                        </Grid>
                          {order.items.length - 1 != i && (
                            <Divider fullWidth sx={{ width: "100%" }} />
                          )}
                      </>
                    ))}
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item container gap={"0.5rem"}>
                    {order.items.map((item, i) => (
                      <>
                        <Grid
                          item
                          container
                          key={i}
                          sx={{
                            gap: "0.3rem",
                          }}
                        >
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              backgroundColor:item.payment ?"#A3C048 !important" :"#C02328 !important",
                              fontSize: "0.5rem",
                              width: "fit-content",
                            }}
                          >
                            {item.payment ? "Paid" : "Not Paid"}
                          </Button>
                          
                        </Grid>
                          {order.items.length - 1 != i && (
                            <Divider fullWidth sx={{ width: "100%" }} />
                          )}
                      </>
                    ))}
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid item container gap={"0.5rem"}>
                    {order.items.map((item, i) => (
                      <>
                        <Grid
                          item
                          container
                          key={i}
                          sx={{
                            gap: "0.3rem",
                          }}
                        >
                          +{item.price}
                          {order.items.length - 1 != i && (
                            <Divider fullWidth sx={{ width: "100%" }} />
                          )}
                        </Grid>
                      </>
                    ))}
                  </Grid>
                </TableCell>
              </TableRow>
             
            ))}
        </TableBody>
      </Table>
    </Grid>
  );
}

export default index;
