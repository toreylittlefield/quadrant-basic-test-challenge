import Proptypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";

const filter = createFilterOptions({ ignoreCase: true, trim: true });
const defaultInputValues = {
  newValue: "",
  inputValue: "",
};

const useStyles = makeStyles({
  root: {
    width: "clamp(325px,375px,500px)",
    padding: "5px 0px 5px 0px",
  },
});

const CustomAutoComplete = ({
  setFormValues = () => {},
  inputDataArray = [],
  stateKey = "",
  id = "",
  displayLabel = "",
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultInputValues);
  const { inputValue } = value;

  // passed setState from props
  const handleSetNewFormValues = (newValue) => {
    if (newValue.trim() === "") return;
    setFormValues((prev) => ({
      ...prev,
      [stateKey]: [...prev[stateKey], newValue.trim()],
    }));
  };

  // local state
  const handleSetNewValueInput = (newValue) => {
    if (newValue.trim() === "") return;
    setValue(() => ({
      newValue: newValue.trim(),
      inputValue: newValue.trim(),
    }));
  };

  return (
    <Autocomplete
      classes={{
        root: classes.root,
      }}
      id={id}
      value={inputValue}
      // onKeyDown={(event, val) => {
      //   // To handle create new option on Enter key
      //   if (event.key === "Enter") {
      //     const filtered = filter(inputDataArray, {
      //       inputValue: event.target.value,
      //       getOptionLabel: (option) => option,
      //     });
      //     if (filtered.length === 0) {
      //       handleSetNewValueInput(event.target.value);
      //       handleSetNewFormValues(event.target.value);
      //     }
      //   }
      // }}
      onChange={(event, val) => {
        if (event.key === "Enter" && val) {
          const filtered = filter(inputDataArray, {
            inputValue: event.target.value,
            getOptionLabel: (option) => option,
          });
          if (
            filtered.length === 0 &&
            !filtered.find((str) => str === event.target.value)
          ) {
            handleSetNewValueInput(event.target.value);
            handleSetNewFormValues(event.target.value);
          }
        } else if (val && val.newValue) {
          // Create a new value from the user input
          handleSetNewValueInput(val.newValue);
          handleSetNewFormValues(val.newValue);
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
          !filtered.find((str) => str === params.inputValue)
        ) {
          filtered.push({
            newValue: params.inputValue,
            addOption: `Add "${params.inputValue}"`,
          });
        }
        // const findMatch = filtered.find(
        //   (option) => option === params.inputValue
        // );
        // else if (findMatch) {
        //   filtered.push({
        //     existingValue: params.inputValue,
        //     editOption: `Edit "${params.inputValue}"`,
        //   });
        // }
        return filtered;
      }}
      autoSelect
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={inputDataArray}
      getOptionLabel={(option) => {
        // Add "xxx" opion created dynamically
        if (option.newValue) {
          return option.newValue;
        }
        // if (option.existingValue) {
        //   return option.existingValue;
        // }
        return option;
      }}
      renderOption={(option) => {
        if (option.addOption) {
          return option.addOption;
        }
        if (option.editOption) {
          return option.editOption;
        }
        return option;
      }}
      freeSolo
      renderInput={(params) => <TextField {...params} label={displayLabel} />}
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
