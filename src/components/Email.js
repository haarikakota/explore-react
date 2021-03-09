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

const Email = ({ id, labelName, placeholder, errorMessage, handleChange }) => {
  return (
    <div className="mb-3">
      {LabelElement({ labelName, id })}
      <input
        type="email"
        className="form-control"
        id={id ?? "email"}
        placeholder={placeholder ?? "Enter email"}
        onChange={handleChange}
      />
      <div className="form-text d-none">
        {errorMessage ?? "Enter Valid Details"}
      </div>
    </div>
  );
};

export default Email;
