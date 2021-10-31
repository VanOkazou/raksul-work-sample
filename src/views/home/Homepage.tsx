import { useLocation, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";

import type { PaperSize } from "services/prices";
import { parseQueryParams, stringifyQuery } from "views/utils/url";

import Filters from "./Filters";
import PriceTable from "./PriceTable";
import useFetchPrices from "./useFetchPrices";
import { PAPER_A4_SIZE } from "./constants";

export default function HomePage(): ReactElement {
  const { pathname, search } = useLocation();
  const history = useHistory();
  const parsedSearch = parseQueryParams(search);
  const { data } = useFetchPrices(parsedSearch.size as PaperSize);

  function handleFilterChange(newSize: PaperSize) {
    if (newSize !== parsedSearch.size) {
      const params = stringifyQuery({
        ...parsedSearch,
        size: newSize,
      });
      history.push(`${pathname}${params}`);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} py="20px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Filters
            onFilterChange={handleFilterChange}
            value={(parsedSearch.size as PaperSize) || PAPER_A4_SIZE}
          />
        </Grid>
        <Grid item xs={8}>
          {!data ? <CircularProgress /> : <PriceTable data={data.prices} />}
        </Grid>
        <Grid item xs={12}>
          2
        </Grid>
      </Grid>
    </Box>
  );
}
