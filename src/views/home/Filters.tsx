import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import type { ReactElement } from "react";

import { PAPER_SIZES, PAPER_A4_SIZE } from "./constants";

export default function Filters(): ReactElement {
  const [size, setSize] = useState(PAPER_A4_SIZE);

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="paper-sizes">Sizes</InputLabel>
        <Select
          labelId="paper-sizes"
          id="paper-sizes-select"
          value={size}
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
