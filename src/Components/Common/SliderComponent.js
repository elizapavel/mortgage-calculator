import React from "react";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const renderSelectedValue = (label, unit, amount) => {
  return <Stack gap={1}>
    <Typography variant="subtitle2">{label}</Typography>
    <Typography variant="h5">
      {unit} {amount}
    </Typography>
  </Stack>
}

const renderRangeValues = (unit, min, max) => {
  return <Stack direction="row" justifyContent="space-between">
    <Typography variant="caption" color="text.secondary">
      {unit} {min}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {unit} {max}
    </Typography>
  </Stack>
}

export const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
}) => {
  return (
    <Stack my={1.4}>
      { renderSelectedValue(label, unit, amount) }

      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
        marks
        step={steps}
      />

      { renderRangeValues(unit, min, max) }
    </Stack>
  );
};

export default SliderComponent;
