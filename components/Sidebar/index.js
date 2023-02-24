"use client"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const menus = [
  { icon: "/images/calendar.svg", label: "Orders" },
  { icon: "/images/table.svg", label: "Tables" },
  { icon: "/images/reservation.svg", label: "Reservation" },
  { icon: "/images/sandclock.svg", label: "Waiting" },
  { icon: "/images/calendar.svg", label: "Cashier" },
];

const Sidebar = () => {
  const [selected, setselected] = useState(4);

  return (
    <Box className="h-full py-2 mr-4 my-2 rounded-xl bg-white flex flex-col justify-between items-center w-24">
      <Box className="py-2">
        {menus.length &&
          menus.map((menu, ind) => (
            <Box
              key={ind}
              className={`flex flex-col items-center cursor-pointer py-4 px-2 ${
                selected == ind
                  ? "border-solid border-r-2 border-red-700 box-border"
                  : "pr-2"
              }`}
              onClick={() => setselected(ind)}
            >
              <Box>
                <img src={menu.icon} alt="menu" />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  className={`hover:text-red-600 ${
                    selected == ind ? "text-red-600" : "text-stone-400"
                  }`}
                >
                  {menu.label}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
      <Box className="flex flex-col items-center cursor-pointer">
        <Box>
          <img src="/images/signOut.svg" alt="menu" />
        </Box>
        <Box>
          <Typography variant="caption" className="text-stone-400">
            Sign out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
