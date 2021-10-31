import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import type { ReactElement } from "react";

import type { PaperSize } from "services/prices";

import { PAPER_SIZES } from "./constants";

type Props = {
  value: PaperSize;
  onFilterChange: (size: PaperSize) => void;
};

export default function Filters({
  onFilterChange,
  value,
}: Props): ReactElement {
  const handleChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as PaperSize);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="paper-sizes">Sizes</InputLabel>
        <Select
          labelId="paper-sizes"
          id="paper-sizes-select"
          value={value}
          label="Sizes"
          onChange={handleChange}
        >
          {PAPER_SIZES.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
