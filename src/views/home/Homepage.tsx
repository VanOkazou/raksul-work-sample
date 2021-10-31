import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";

import PriceTable from "./PriceTable";

export default function HomePage(): ReactElement {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          1
        </Grid>
        <Grid item xs={8}>
          <PriceTable />
        </Grid>
        <Grid item xs={12}>
          2
        </Grid>
      </Grid>
    </Box>
  );
}
