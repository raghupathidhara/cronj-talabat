import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from '@/components/Header'

import Dashboard from '@/components/Dashboard'

import bills from "@/data";

export default function Home() {

  return (

    <Grid container sx={{
      gap:'10px',
      display:'grid',
      gridTemplateColumns:'1fr',
      height:'100vh',
      paddingLeft:'0.4rem'
    }}>
      <Grid item container sx={{width:'98%'}}>
        <Header />
      </Grid>
      <Grid
        item
        container
        
        sx={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          width:'98%',
          gap:'1rem'
        }}
      >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <Dashboard bills={bills} />
        </Grid>
      </Grid>
    </Grid>
  );
}
