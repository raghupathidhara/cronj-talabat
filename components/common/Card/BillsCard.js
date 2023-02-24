import { Box, Typography } from "@mui/material";
import React from "react";

const BillsCard = ({ cardData, onClick,selected }) => {
  const {
    title,
    details: { isPaid, cost, orderType, date },
  } = cardData;

  return (
    <Box
      className={`m-2 p-2 border-${selected?"red":"gray"}-600 rounded-md border-2 cursor-pointer hover:border-red-600`}
      onClick={() => onClick()}
    >
      <Box className="flex justify-between">
        <Box className="flex items-center">
          <Box className="mr-2">
            <Typography className="text-xl font-bold">{title}</Typography>
          </Box>
          <Box
            sx={{
              width: "8px",
              height: "8px",
              backgroundColor: `${isPaid ? "green" : "red"}`,
              borderRadius: "10px",
            }}
            className="mr-2"
          ></Box>
          <Box>
            <Typography className="text-xs">
              {isPaid ? "Paid" : "Not Paid"}
            </Typography>
          </Box>
        </Box>
        <Box className="text-xl font-bold">{parseFloat(cost).toFixed(2)}</Box>
      </Box>
      <Box className="flex justify-between mt-2">
        <Box className="text-gray-400 text-sm">{orderType}</Box>
        <Box className="text-gray-400 text-sm">{String(date)}</Box>
      </Box>
    </Box>
  );
};

export default BillsCard;
