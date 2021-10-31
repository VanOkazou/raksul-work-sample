import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";

import Filters from "./Filters";
import PriceTable from "./PriceTable";
import useFetchPrices from "./useFetchPrices";

export default function HomePage(): ReactElement {
  const { data, isFetching } = useFetchPrices();

  return (
    <Box sx={{ flexGrow: 1 }} py="20px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Filters />
        </Grid>
        <Grid item xs={8}>
          {isFetching || !data ? (
            <CircularProgress />
          ) : (
            <PriceTable data={data.prices} />
          )}
        </Grid>
        <Grid item xs={12}>
          2
        </Grid>
      </Grid>
    </Box>
  );
}
