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
    setFormValues((prev) => ({
      ...prev,
      [stateKey]: [...prev[stateKey], newValue],
    }));
  };

  // local state
  const handleSetNewValueInput = (newValue) => {
    setValue(() => ({
      newValue: newValue,
      inputValue: newValue,
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
          return;
        }
        if (val && val.newValue) {
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
        return option;
      }}
      renderOption={(option) => (option.addOption ? option.addOption : option)}
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
