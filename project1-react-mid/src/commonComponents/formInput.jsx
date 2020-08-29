import React from "react";
const FormInput = ({
  name,
  label,
  inputType,
  inputId,
  value,
  disabled = false,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
        id={inputId}
        name={name}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

export default FormInput;
