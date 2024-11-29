import React from "react";

const TableLoader = ({ count = 15, cols = 3 }) => {
  const box = [];
  let i;

  let innerBox = () => {
    while (count % cols !== 0) {
      count++;
    }
    return count;
  };

  for (i = 1; i <= innerBox(); i++) {
    box.push(
      <div
        key={i}
        className=" bg-secondary p-1.5 h-[7px] w-full rounded-md relative loading-bar overflow-hidden"
      ></div>
    );
  }

  if (cols !== 0) {
    return (
      <div
        className="grid p-2 gap-4"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {box}
      </div>
    );
  }
};

export default TableLoader;
