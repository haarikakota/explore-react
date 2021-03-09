import React from "react";

function LabelElement({ labelName, id }) {
  if (labelName) {
    return (
      <label htmlFor={id} className="form-label">
        {labelName}
      </label>
    );
  }
}

const Password = ({
  id,
  labelName,
  placeholder,
  errorMessage,
  handleChange,
}) => {
  return (
    <div className="mb-3">
      {LabelElement({ labelName, id })}
      <input
        type="password"
        className="form-control"
        id={id ?? "password"}
        placeholder={placeholder ?? "Enter Password"}
        onChange={handleChange}
      />
      <div className="form-text d-none">
        {errorMessage ?? "Enter Valid Details"}
      </div>
    </div>
  );
};

export default Password;
