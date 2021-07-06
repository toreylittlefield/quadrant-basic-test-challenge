import React, { useState } from "react";
import CustomTextField from "./CustomTextField";
import CustomSingleSelect from "./CustomSingleSelect";
import CustomAutoCompleteComboBox from "./CustomAutoCompleteComboBox";

const defaultFormValues = {
  name: "",
  type: ["new", "old"],
  fabrics: [{ fabric: "new" }, { fabric: "old" }],
  img: "",
};

const CustomForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { name, type, fabrics } = formValues;
  return (
    // className={classes.root}
    <form noValidate autoComplete="off">
      {/* Textfield */}
      <CustomTextField setFormValues={setFormValues} name={name} />
      <CustomSingleSelect setFormValues={setFormValues} type={type} />
      <CustomAutoCompleteComboBox
        setFormValues={setFormValues}
        fabrics={fabrics}
      />
    </form>
  );
};

export default CustomForm;
