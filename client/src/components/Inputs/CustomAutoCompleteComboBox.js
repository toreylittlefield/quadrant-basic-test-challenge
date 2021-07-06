import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CustomAutoCompleteComboBox = ({
  setFormValues = () => {},
  fabrics = {},
}) => (
  <Autocomplete
    id="fabric-combo-box-autocomplete"
    options={fabrics}
    getOptionLabel={(option) => option.fabric}
    style={{ width: 375 }}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Fabric"
        variant="outlined"
        onSelect={(e) =>
          setFormValues((prev) => ({ ...prev, fabric: e.target.value }))
        }
      />
    )}
  />
);

CustomAutoCompleteComboBox.defaultProps = {
  setFormValues: () => {},
  fabrics: {},
};

CustomAutoCompleteComboBox.propTypes = {
  setFormValues: Proptypes.func,
  fabrics: Proptypes.arrayOf(
    Proptypes.shape({
      fabric: Proptypes.string,
    })
  ),
};

export default CustomAutoCompleteComboBox;
