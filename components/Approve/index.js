import { Grid, Typography,Box,Button } from '@mui/material'
import React from 'react'

const Approve = ({setApprove}) => {
  return (
    <>
    <Box className='flex flex-col bg-white justify-center rounded-md items-center w-full h-full' >
      <Grid container className='w-max'>
        <Grid item >
            <Box className='border-2 border-lime-600 px-28 py-8 text-center bg-sky-50 rounded-md'>
                <Typography className='font-bold text-emerald-400'>200.00 SAR</Typography>
                <Typography className='font-bold text-neutral-400 text-sm'>Money on cashier</Typography>
            </Box>
        </Grid>
      </Grid>
      <Grid container className='flex items-center my-4 w-max'>
            <Grid item className='mr-3'>
                <Button className='text-center text-xs font-bold w-full bg-rose-700  px-14 py-3' variant='contained' onClick={()=>setApprove(true)}>Approve</Button>
            </Grid>
            <Grid item>
            <Button className='text-center text-xs w-full bg-color-red text-white bg-slate-300 px-14 py-3' variant='contained'>Reject</Button>
            </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default Approve