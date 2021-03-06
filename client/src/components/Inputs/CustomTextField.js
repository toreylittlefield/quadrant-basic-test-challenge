import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextField = ({ setFormValues = () => {}, name = "" }) => (
  <TextField
    id="name-field"
    style={{ width: 375, marginRight: 8, padding: "5px 5px 5px 0px" }}
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
