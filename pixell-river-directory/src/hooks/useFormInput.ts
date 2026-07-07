import { useState } from "react";

function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const reset = () => {
    setValue(initialValue);
    setMessage("");
  };

  return {
    value,
    setValue,
    message,
    setMessage,
    reset,
  };
}

export default useFormInput;