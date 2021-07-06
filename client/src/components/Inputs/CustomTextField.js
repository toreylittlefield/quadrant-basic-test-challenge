import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextField = ({ setFormValues = () => {}, name = "" }) => (
  <TextField
    id="standard-name"
    style={{ width: 375 }}
    label="Name"
    value={name}
    onChange={(e) =>
      setFormValues((prev) => ({ ...prev, name: e.target.value }))
    }
  />
);

CustomTextField.defaultProps = {
  setFormValues: () => {},
  name: "",
};

CustomTextField.propTypes = {
  setFormValues: Proptypes.func,
  name: Proptypes.string,
};

export default CustomTextField;
