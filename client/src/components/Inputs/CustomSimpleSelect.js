import Proptypes from "prop-types";
import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const CustomSimpleSelect = ({
  setFormValues = () => {},
  types = [],
  selectedType = "",
}) => (
  <FormControl style={{ width: 375 }}>
    <InputLabel id="custom-simple-select-label-types">Type</InputLabel>
    <Select
      labelId="custom-simple-select-label-types"
      id="custom-simple-select"
      value={selectedType}
      onChange={(e) =>
        setFormValues((prev) => ({ ...prev, selectedType: e.target.value }))
      }
    >
      {types.map((typevalue) => (
        <MenuItem key={uuidv4()} value={typevalue}>
          {typevalue}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

CustomSimpleSelect.defaultProps = {
  setFormValues: () => {},
  types: [],
  selectedType: "",
};

CustomSimpleSelect.propTypes = {
  setFormValues: Proptypes.func,
  types: Proptypes.arrayOf(Proptypes.string),
  selectedType: Proptypes.string,
};

export default CustomSimpleSelect;
