import Proptypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();
const defaultInputValues = {
  newValue: "",
  inputValue: "",
};

const CustomAutoComplete = ({
  setFormValues = () => {},
  inputDataArray = [],
  stateKey = "",
  id = "",
  displayLabel = "",
}) => {
  const [value, setValue] = React.useState(defaultInputValues);
  const { inputValue } = value;

  return (
    <Autocomplete
      value={inputValue}
      onChange={(event, val) => {
        if (typeof val === "string") {
          setValue((prev) => ({
            ...prev,
            inputValue: val,
          }));
        } else if (val && val.newValue) {
          // Create a new value from the user input
          setValue((prev) => ({
            ...prev,
            newValue: val.newValue,
            inputValue: val.newValue,
          }));
          setFormValues((prev) => ({
            ...prev,
            [stateKey]: [...prev.types, val.newValue],
          }));
        } else {
          setValue((prev) => ({
            ...prev,
            inputValue: val,
          }));
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (
          params.inputValue !== "" &&
          !options.find((option) => option === params.inputValue)
        ) {
          filtered.push({
            newValue: params.inputValue,
            addOption: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={id}
      options={inputDataArray}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" opion created dynamically
        if (option.newValue) {
          return option.newValue;
        }
        // Regular option
        return option;
      }}
      renderOption={(option) => (option.addOption ? option.addOption : option)}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={displayLabel} variant="outlined" />
      )}
    />
  );
};

export default CustomAutoComplete;

CustomAutoComplete.defaultProps = {
  setFormValues: () => {},
  inputDataArray: [],
  stateKey: "",
  id: "",
  displayLabel: "",
};

CustomAutoComplete.propTypes = {
  setFormValues: Proptypes.func,
  inputDataArray: Proptypes.arrayOf(Proptypes.string),
  stateKey: Proptypes.string,
  id: Proptypes.string,
  displayLabel: Proptypes.string,
};
