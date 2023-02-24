import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <Grid container sx={{
      gap:'2rem'
    }}>
      <Grid item container>
        Header
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "10% 1fr",
          gap:'2rem'
        }}
      >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item container>
          <Grid item container>
            cashier
          </Grid>
          <Grid item container sx={{
            display:'grid',
            gridTemplateColumns:'30% 1fr'
          }} >
            <Grid item container>Bills</Grid>
            <Grid item container>Table 1</Grid>
          </Grid>
          <Grid item container>Footer</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
