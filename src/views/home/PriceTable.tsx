import { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactElement } from "react";

import { formatPrice } from "utils/number";
import type { Price } from "services/prices";

import { TableCell } from "./PriceTable.style";
import type { SelectedPrice } from "./types";

type Props = {
  data: Price[][];
  onCellClick: (selectedPrice: SelectedPrice) => void;
  onCellHover: (selectedPrice: SelectedPrice | null) => void;
  hoveredPrice: SelectedPrice | null;
  selectedPrice: SelectedPrice | null;
};

export default function PriceTable({
  data,
  onCellClick,
  onCellHover,
  hoveredPrice,
  selectedPrice,
}: Props): ReactElement {
  const [showAll, setShowAll] = useState(false);
  const formatRows = data.map((item) => {
    const quantity = item[0].quantity;
    const prices = item.map(({ price, business_day }) => ({
      price,
      businessDay: business_day,
    }));
    return { quantity, prices };
  });

  const rows = showAll ? formatRows : formatRows.slice(0, 5);

  function handleShowAllButtonClick() {
    setShowAll(!showAll);
    onCellClick(null);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Business Day / Quantity</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">4</TableCell>
            <TableCell align="right">5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={`cell-${rowIndex}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.quantity}
              </TableCell>
              {row.prices.map(({ price, businessDay }, cellIndex) => (
                <Fragment key={`${row.quantity}-${businessDay}`}>
                  <TableCell
                    align={cellIndex === 0 ? "left" : "right"}
                    component={cellIndex === 0 ? "th" : "td"}
                    isHovered={
                      !!(
                        hoveredPrice &&
                        (hoveredPrice.quantity === row.quantity ||
                          hoveredPrice.businessDay === businessDay)
                      )
                    }
                    isSelected={
                      !!(
                        selectedPrice &&
                        selectedPrice.businessDay === businessDay &&
                        selectedPrice.quantity === row.quantity
                      )
                    }
                    isTargeted={
                      !!(
                        hoveredPrice &&
                        hoveredPrice.businessDay === businessDay &&
                        hoveredPrice.quantity === row.quantity
                      )
                    }
                    onMouseEnter={() =>
                      onCellHover({
                        businessDay,
                        quantity: row.quantity,
                        price,
                      })
                    }
                    onMouseLeave={() => onCellHover(null)}
                    onClick={() =>
                      onCellClick({
                        businessDay,
                        quantity: row.quantity,
                        price,
                      })
                    }
                    scope="row"
                  >
                    {formatPrice(price)}
                  </TableCell>
                </Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box>
        <Button onClick={handleShowAllButtonClick}>
          {showAll ? "See less" : "See more"}
        </Button>
      </Box>
    </TableContainer>
  );
}
