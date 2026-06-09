import { useState } from "react";

function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const validate = (callback: (value: string) => string) => {
    const result = callback(value);
    setMessage(result);
    return result;
  };

  const reset = () => {
    setValue(initialValue);
    setMessage("");
  };

  return {
    value,
    setValue,
    message,
    setMessage,
    validate,
    reset,
  };
}

export default useFormInput;