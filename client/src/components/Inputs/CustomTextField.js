import Proptypes from "prop-types";
import React from "react";
import { TextField } from "@material-ui/core";

const CustomTextField = ({ setFormValues = () => {}, name = "" }) => (
  <div>
    <TextField
      id="standard-name"
      label="Name"
      value={name}
      onChange={(e) =>
        setFormValues((prev) => ({ ...prev, name: e.target.value }))
      }
    />
  </div>
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
