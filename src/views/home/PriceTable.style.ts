import styled, { css } from "styled-components";
import MUITableCell from "@mui/material/TableCell";

type TableCellProps = {
  isSelected: boolean;
};

export const TableCell = styled(MUITableCell)<TableCellProps>`
  ${({ isSelected, onClick, theme }) =>
    onClick
      ? css`
          cursor: pointer;
          ${isSelected
            ? css`
                color: white;
                font-weight: bold;
                background: ${theme.palette.primary.main};
              `
            : null}
        `
      : null}
`;
