
import { Box, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import BillsCard from "../common/Card/BillsCard";

function Index({ bills, setSelectedBill }) {
  const [index, setIndex] = useState(0);

  const onClickHandler = (value) => {
    setIndex(value);
    setSelectedBill(value);
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
      }}
      className="w-full overflow-y-scroll scroller"
    >
      <Box className="w-full flex justify-between px-2 pt-2 mb-2">
        <Box className="font-bold text-xl">Bills</Box>
        <Box className="bg-gray-200 px-3 rounded-xl">All Orders</Box>
      </Box>
      <Divider />

      {bills.length && bills.map((bill, i) => (
        <BillsCard
          cardData={bill}
          onClick={() => onClickHandler(i)}
          key={i}
          selected={index === i}
        />
      ))}
    </Box>
  );
}

export default Index;
