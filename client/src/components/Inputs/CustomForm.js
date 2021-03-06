import React, { useState } from "react";
import styled from "styled-components";
import CustomTextField from "./CustomTextField";
import CustomAutoComplete from "./CustomAutoComplete";

const defaultFormValues = {
  name: "",
  types: ["new", "old"],
  fabrics: ["Kurabo Selvedge Denim", "Blue Denim"],
  img: "",
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const CustomForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { name, types, fabrics } = formValues;
  return (
    <StyledForm noValidate autoComplete="off">
      {/* Textfield Input */}
      <CustomTextField setFormValues={setFormValues} name={name} />

      {/* Autocomplete Freesolo Combobox for types i.e "new", "old" ...  */}
      <CustomAutoComplete
        setFormValues={setFormValues}
        inputDataArray={types}
        stateKey="types"
        id="simple-select-types"
        displayLabel="Type"
      />

      {/* Autocomplete Freesolo Combobox for fabrics */}
      <CustomAutoComplete
        setFormValues={setFormValues}
        inputDataArray={fabrics}
        stateKey="fabrics"
        id="combobox-fabrics"
        displayLabel="Fabric"
      />
    </StyledForm>
  );
};

export default CustomForm;
