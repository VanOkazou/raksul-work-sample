import styled, { css } from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import MUITableCell from "@mui/material/TableCell";

type TableCellProps = {
  isSelected?: boolean;
  isHovered?: boolean;
  isTargeted?: boolean;
};

export const TableCell = styled(MUITableCell).withConfig({
  shouldForwardProp,
})<TableCellProps>`
  ${({ isHovered, isSelected, isTargeted, onClick, theme }) =>
    onClick
      ? css`
          cursor: pointer;

          ${isSelected
            ? css`
                color: white;
                font-weight: bold;
                background: ${theme.palette.primary.dark};
              `
            : null}
          ${isTargeted && !isSelected
            ? css`
                color: white;
                background: ${theme.palette.primary.main};
              `
            : null}
          ${isHovered && !isSelected && !isTargeted
            ? css`
                color: white;
                background: ${theme.palette.primary.light};
              `
            : null}
        `
      : null}
`;
