import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const CustomSingleSelect = ({ setFormValues = () => {}, type = "" }) => (
  <div>
    <TextField
      id="standard-name"
      label="Type"
      value={type}
      onChange={(e) =>
        setFormValues((prev) => ({ ...prev, name: e.target.value }))
      }
    />
  </div>
);

CustomSingleSelect.defaultProps = {
  setFormValues: () => {},
  type: "",
};

CustomSingleSelect.propTypes = {
  setFormValues: Proptypes.func,
  type: Proptypes.string,
};

export default CustomSingleSelect;
