import { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactElement } from "react";

import type { Price } from "services/prices";

import { TableCell } from "./PriceTable.style";
import type { SelectedPrice } from "./types";

type Props = {
  data: Price[][];
  onCellClick: (selectedPrice: SelectedPrice) => void;
  selectedPrice: SelectedPrice | null;
};

export default function PriceTable({
  data,
  onCellClick,
  selectedPrice,
}: Props): ReactElement {
  const rows = data.map((item) => {
    const quantity = item[0].quantity;
    const prices = item.map(({ price, business_day }) => ({
      price,
      businessDay: business_day,
    }));
    return { quantity, prices };
  });

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
                    isSelected={
                      selectedPrice &&
                      selectedPrice.businessDay === businessDay &&
                      selectedPrice.quantity === row.quantity
                    }
                    onClick={() =>
                      onCellClick({
                        businessDay,
                        quantity: row.quantity,
                        price,
                      })
                    }
                    scope="row"
                  >
                    {price}
                  </TableCell>
                </Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
