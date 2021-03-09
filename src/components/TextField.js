import React from "react";

const LabelElement = ({ labelName, id }) => {
  if (labelName) {
    return (
      <label htmlFor={id} className="form-label">
        {labelName}
      </label>
    );
  }
};

const TextField = ({ id, labelName, placeholder, errorMessage, handleChange }) => {
  return (
    <div className="mb-3">
      {LabelElement({ labelName, id })}
      <input
        type="text"
        className="form-control"
        id={id ?? "textField"}
        aria-describedby={labelName ?? "TextField"}
        placeholder={placeholder ?? "Enter Names"}
        onChange={handleChange}
      />
      <div className="form-text d-none">
        {errorMessage ?? "Enter Valid Details"}
      </div>
    </div>
  );
};

export default TextField;
