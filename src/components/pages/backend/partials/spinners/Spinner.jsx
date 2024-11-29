import React from "react";

const Spinner = ({ diameter = "w-[40px]", css }) => {
  return (
    <div className="origin-center spinner animate-rotate">
      <svg viewBox="25 25 50 50" className={`${diameter}`}>
        <circle r="18" cy="50" cx="50" className={css}></circle>
      </svg>
    </div>
  );
};

export default Spinner;
