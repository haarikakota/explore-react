import React from "react";

const Checkbox = ({ id, labelName, handleChange }) => {
  return (
    <div className="form-check px-4">
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {labelName}
      </label>
    </div>
  );
};

export default Checkbox;
