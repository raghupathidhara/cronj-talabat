import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Sidebar = () => {
  return (
    <Box className="h-screen p-5 m-3 rounded-xl bg-zinc-400 w-max flex flex-col justify-between items-center">
      <Box className="py-4 px-2">
        <Box>
            {/* <Box><img src={} alt="menu" /></Box> */}
            <Box><Typography variant="caption" className="">Orders</Typography></Box>
        </Box>
      </Box>
      <Box>box2</Box>
    </Box>
  );
};

export default Sidebar;
