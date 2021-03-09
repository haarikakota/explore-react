import React from "react";

const Button = ({ name }) => {
  return (
    <div className="col text-center">
      <button className="btn btn-primary mt-4" form="submit-form">
        {name}
      </button>
    </div>
  );
};

export default Button;
