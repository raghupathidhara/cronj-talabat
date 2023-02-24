import { Grid } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer/Footer";
import ButtonComp from "@/components/Button/Button";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        gap: "2rem",
      }}
    >
      <Grid item container>
        Header
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "10% 1fr",
          gap: "2rem",
        }}
      >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item container>
          <Grid item container>
            cashier
          </Grid>
          <Grid
            item
            container
            sx={{
              display: "grid",
              gridTemplateColumns: "30% 1fr",
            }}
          >
            <Grid item container>
              Bills
            </Grid>
            <Grid item container>
            </Grid>
          </Grid>
          <Grid item container className="m-3 mt-auto">
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
