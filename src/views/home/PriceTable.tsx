import { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactElement } from "react";

import type { Price } from "services/prices";

function createData(
  name: string | number,
  ...prices: number[]
): (string | number)[] {
  return [name, ...prices];
}

type Props = {
  data: Price[][];
};

export default function PriceTable({ data }: Props): ReactElement {
  const rows = data.map((item) => {
    const quantity = item[0].quantity;
    const prices = item.map(({ price }) => price);
    return createData(quantity, ...prices);
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
              {row.map((cell, cellIndex) => (
                <Fragment key={cellIndex}>
                  <TableCell
                    align={cellIndex === 0 ? "left" : "right"}
                    component={cellIndex === 0 ? "th" : "td"}
                    scope="row"
                  >
                    {cell}
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
