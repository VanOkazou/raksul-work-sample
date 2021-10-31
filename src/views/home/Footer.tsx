import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";

type Props = {
  price?: number;
};

export default function Footer({ price }: Props): ReactElement {
  return (
    <Box p="20px">
      {price && (
        <Typography textAlign="right">
          Order price&nbsp;:&nbsp;
          <strong>¥{price}</strong>
        </Typography>
      )}
    </Box>
  );
}
