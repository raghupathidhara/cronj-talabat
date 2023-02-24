import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from '@/components/Header'

import Dashboard from '@/components/Dashboard'

import bills from "@/data";

export default function Home() {

  return (

    <Grid container className="w-full" sx={{
      gap:'10px',
      display:'grid',
      
    }}>
      <Grid item container className="w-full">
        <Header />
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "10% 1fr",
          // gap: "2rem",
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
