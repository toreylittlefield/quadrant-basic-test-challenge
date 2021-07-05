import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const CustomAutoCompleteComboBox = ({
  setFormValues = () => {},
  fabric = "",
}) => (
  <div>
    <TextField
      id="standard-name"
      label="Fabric"
      value={fabric}
      onChange={(e) =>
        setFormValues((prev) => ({ ...prev, fabric: e.target.value }))
      }
    />
  </div>
);

CustomAutoCompleteComboBox.defaultProps = {
  setFormValues: () => {},
  fabric: "",
};

CustomAutoCompleteComboBox.propTypes = {
  setFormValues: Proptypes.func,
  fabric: Proptypes.string,
};

export default CustomAutoCompleteComboBox;
