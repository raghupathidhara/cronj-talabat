import { Grid, Typography,Box,Button } from '@mui/material'
import React from 'react'

const Approve = ({setApprove}) => {
  return (
    <>
    <Box className='flex flex-col m-3 bg-white justify-center items-center' sx={{width:"100%",height:"100%"}}>
      <Grid container>
        <Grid item md={4}>
            <Box className='border-2 border-lime-600 p-4 text-center bg-sky-50 rounded-md'>
                <Typography className='font-bold text-emerald-400'>200.00 SAR</Typography>
                <Typography className='font-bold text-neutral-400 text-sm'>Money on cashier</Typography>
            </Box>
        </Grid>
      </Grid>
      <Grid container className='flex items-center my-3'>
            <Grid item md={2} >
                <Button className='text-center text-xs font-bold w-full bg-rose-700 text-black py-4' variant='contained' onClick={()=>setApprove(true)}>Approve</Button>
            </Grid>
            <Grid item md={2}>
            <Button className='text-center text-xs w-full bg-color-red text-white bg-slate-300 py-4' variant='contained'>Reject</Button>
            </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default Approve