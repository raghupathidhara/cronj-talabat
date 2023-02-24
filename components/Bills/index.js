import { Grid } from '@mui/material'
import React, { useState } from 'react'

function index({bills, setSelectedBill}) {

    const [index, setIndex]= useState(0);

    const onClickHandler= (value)=>{
        setIndex(value)
        setSelectedBill(value)
    }

  return (
    <Grid container>
       {bills && bills.map((bill, i)=>(
        <Grid item container key={bill.id} onClick={()=>onClickHandler(i)} style={{
            color: index===i ? "red" :'black',
            cursor:'pointer'
        }}>
            {bill.title}
        </Grid>
       ))}
    </Grid>
  )
}

export default index