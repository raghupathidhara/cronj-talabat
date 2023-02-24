import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const dootedClass = 'border-dashed border-2  p-2 text-xs font-bold mx-2 rounded-md';


function index() {
  return (
    <>
       <Box className='flex justify-between  p-5 mr-3 bg-slate-200 rounded-md'>
        <Box className='flex items-center'>
          <Typography className='font-bold mr-2'>Cashier</Typography>
          <Typography className={`${dootedClass} border-slate-600`}>Starting Money :200  SAR</Typography>
        </Box>
        <Box className='flex items-center'>
        <Typography className={`${dootedClass} border-indigo-600`}>Totak Refunds :200  SAR</Typography>
        <Typography className={`${dootedClass} border-cyan-600`}>Total Sales :200  SAR</Typography>
        <Typography className={`${dootedClass} border-lime-600`}>Today Total in Cash :200  SAR</Typography>
        <Typography className={`${dootedClass} border-rose-600`}>Total in Bank :200  SAR</Typography>
        <Button className="bg-pink-900 p-2 text-xs" variant="contained">Close Cashier</Button>
        </Box>
       </Box>
    </>
  )
}

export default index