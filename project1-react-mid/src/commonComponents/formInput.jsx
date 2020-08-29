import React from "react";
const FormInput = ({
  name,
  label,
  inputType,
  inputId,
  value,
  disabled = false,
  onChange,
  attribute,
}) => {
  return (
    <div>
      <label htmlFor={name} className="form-input-label">
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        name={name}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event, attribute)}
      />
    </div>
  );
};

export default FormInput;
