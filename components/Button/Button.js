import { Button } from "@mui/material";
import React from "react";

const ButtonComp = ({ children,bgColor="#C02328",textColor="white",border="none" }) => {
  return <button style={{backgroundColor:bgColor,width:"max-content",height:"max-content",color:textColor,border:border}} className="p-2 rounded-lg m-1 box-content">{children}</button>;
};

export default ButtonComp;
