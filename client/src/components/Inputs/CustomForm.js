import React, { useState } from "react";
import CustomTextField from "./CustomTextField";

const defaultFormValues = {
  name: "",
  type: "",
  fabric: "",
  img: "",
};

const CustomForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { name, type, fabric, img } = formValues;
  console.log({ type, fabric, img });
  return (
    // className={classes.root}
    <form noValidate autoComplete="off">
      {/* Textfield */}
      <CustomTextField setFormValues={setFormValues} name={name} />
    </form>
  );
};

export default CustomForm;
