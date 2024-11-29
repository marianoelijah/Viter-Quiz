import React from "react";
import Spinner from "./Spinner";

const SpinnerButton = ({ css = "stroke-white" }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center rounded-full">
        <Spinner diameter="w-[14px]" css={css} />
      </div>
    </>
  );
};

export default SpinnerButton;
