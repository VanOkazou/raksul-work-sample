import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";

import { formatPrice } from "utils/number";

type Props = {
  price?: number;
};

export default function Footer({ price }: Props): ReactElement {
  return (
    <Box p="20px">
      {price && (
        <Typography textAlign="right">
          Order price&nbsp;:&nbsp;
          <strong>¥{formatPrice(price)}</strong>
        </Typography>
      )}
    </Box>
  );
}
