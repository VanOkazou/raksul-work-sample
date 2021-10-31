import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";

import type { PaperSize } from "services/prices";
import { parseQueryParams, stringifyQuery } from "utils/url";

import Filters from "./Filters";
import Footer from "./Footer";
import PriceTable from "./PriceTable";
import useFetchPrices from "./useFetchPrices";
import { PAPER_A4_SIZE } from "./constants";
import type { SelectedPrice } from "./types";

export default function HomePage(): ReactElement {
  const [selectedPrice, setSelectedPrice] = useState<SelectedPrice | null>(
    null
  );
  const [hoveredPrice, setHoveredPrice] = useState<SelectedPrice | null>(null);
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

  function handleCellClick(newSelectedPrice: SelectedPrice | null) {
    setSelectedPrice(newSelectedPrice);
  }

  function handleCellHover(newHoveredPrice: SelectedPrice | null) {
    setHoveredPrice(newHoveredPrice);
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
          {!data ? (
            <CircularProgress />
          ) : (
            <PriceTable
              data={data.prices}
              onCellClick={handleCellClick}
              onCellHover={handleCellHover}
              selectedPrice={selectedPrice}
              hoveredPrice={hoveredPrice}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Footer price={selectedPrice?.price} />
        </Grid>
      </Grid>
    </Box>
  );
}
