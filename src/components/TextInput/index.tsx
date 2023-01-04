import "./styles.css";
type TextInputProps = {
  type?: "text" | "number" | "email";
  placeholder?: string;
  onChange?: (arg0: any) => void;
  value?: string;
};

export const TextInput = ({
  onChange,
  placeholder,
  type = "text",
  value,
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
