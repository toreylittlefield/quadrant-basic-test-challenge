import React, { useState } from "react";
import CustomTextField from "./CustomTextField";
import CustomSimpleSelect from "./CustomSimpleSelect";
import CustomAutoCompleteComboBox from "./CustomAutoCompleteComboBox";

const defaultFormValues = {
  name: "",
  types: ["new", "old"],
  selectedType: "",
  fabrics: [{ fabric: "new" }, { fabric: "old" }],
  img: "",
};

const CustomForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { name, types, fabrics, selectedType } = formValues;
  return (
    // className={classes.root}
    <form noValidate autoComplete="off">
      {/* Textfield */}
      <CustomTextField setFormValues={setFormValues} name={name} />
      <CustomSimpleSelect
        setFormValues={setFormValues}
        types={types}
        selectedType={selectedType}
      />
      <CustomAutoCompleteComboBox
        setFormValues={setFormValues}
        fabrics={fabrics}
      />
    </form>
  );
};

export default CustomForm;
