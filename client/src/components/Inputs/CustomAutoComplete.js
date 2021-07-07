import Proptypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

// const CustomAutoComplete = ({
//   setFormValues = () => {},
//   inputDataArray = [],
//   stateKey = "",
// }) => {
//   const [value, setValue] = useState(null);

//   useEffect(() => {
//     if (!value) return;
//     setFormValues((prev) => ({
//       ...prev,
//       [stateKey]: [...prev[stateKey], value],
//     }));
//   }, [value, stateKey, setFormValues]);

//   return (
//     <Autocomplete
//       value={value}
//       onChange={(event, newValue) => {
//         if (typeof newValue === "string") {
//           console.log({ newValue });
//           setValue(newValue);
//         } else if (newValue && newValue.inputValue) {
//           // Create a new value from the user input
//           setValue(newValue.inputValue);
//         } else {
//           setValue(newValue);
//         }
//       }}
//       filterOptions={(options, params) => {
//         const filtered = filter(options, params);

//         // Suggest the creation of a new value
//         if (params.inputValue !== "") {
//           const { inputValue } = params;
//           filtered.push(inputValue);
//         }
//         return filtered;
//       }}
//       selectOnFocus
//       clearOnBlur
//       handleHomeEndKeys
//       id="free-solo-with-text-demo"
//       options={inputDataArray}
//       getOptionLabel={(option) => {
//         // Value selected with enter, right from the input
//         if (typeof option === "string") {
//           return option;
//         }
//         // Add "xxx" option created dynamically
//         if (option.inputValue) {
//           return option.inputValue;
//         }
//         // Regular option
//         return option;
//       }}
//       renderOption={(option) => option}
//       style={{ width: 300 }}
//       freeSolo
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Free solo with text demo"
//           variant="outlined"
//         />
//       )}
//     />
//   );
// };

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
        <TextField
          {...params}
          label="Free solo with text demo"
          variant="outlined"
        />
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
};

CustomAutoComplete.propTypes = {
  setFormValues: Proptypes.func,
  inputDataArray: Proptypes.arrayOf(Proptypes.string),
  stateKey: Proptypes.string,
  id: Proptypes.string,
};
