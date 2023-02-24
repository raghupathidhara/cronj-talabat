import { Grid } from '@mui/material'
import React from 'react'

function index({orders}) {
  return (
    <Grid container>
        {orders && orders.map((order, i)=>(
            <Grid item container key={i} sx={{display:'grid'}}>
                <div >Order #{order.id}</div>
                <ul>
                    {order.items && order.items.map((item, j)=>(
                        <li key={i+j}>{item.itemInfo.title} and Payment :{item.payment ? "Yes":"No"}</li>
                    ))}
                </ul>
            </Grid>
        ))}
    </Grid>
  )
}

export default index