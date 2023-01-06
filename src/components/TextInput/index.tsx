import "./styles.css";
import React, { useCallback } from "react";
import { formatValue } from "../../utils/useCurrency";
type TextInputProps = {
  type?: "text" | "number" | "email" | "money";
  placeholder?: string;
  onChange?: (arg0: any) => void;
  value?: string;
};

export const TextInput = ({
  onChange,
  placeholder,
  type = "text",
  value,
  ...props
}: TextInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="inputInsert"
      value={value}
    />
  );
};
