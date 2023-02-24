import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

const index = () => {
  return (
    <>
      <Box className="flex justify-start my-2 w-screen box-content">
        <Box className="p-2 mx-3 w-24 rounded-md bg-white">
          <Image src={"/images/logo.svg"} width={50} height={50} className="m-auto"/>
        </Box>
        <Box className="w-11/12 flex justify-between p-2 bg-white rounded-md">
          <Box>
            <Typography className="font-bold text-2xl">
              Welcome Back, Ahmed!
            </Typography>
            <Typography className="text-xs">
              You have <span className="text-rose-800">9 orders</span> to
              complete
            </Typography>
          </Box>
          <Box className="flex items-center">
            <Box className="px-5 border-r-2 border-slate-300"><TextField
              id="input-with-icon-textfield"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            /></Box>
            

            <Image
              className="p-1 border-r-2 border-slate-300"
              src={"/images/greenbox.svg"}
              width={70}
              height={50}
            />

            <Image
             className="m-2"
              src={"/images/notification-1.svg"}
              width={30}
              height={50}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default index;