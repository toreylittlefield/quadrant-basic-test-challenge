import { useState } from "react";

// Just a custom hook that toggles state
const useHideComponent = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => setValue(!value);

  return [value, handleToggle];
};

export default useHideComponent;
