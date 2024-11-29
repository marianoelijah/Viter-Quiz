import React from "react";

const ModalWrapper = ({children}) => {
  return (
    <>
      <div className="modal fixed h-screen w-full top-0 left-0 z-50">
              <div className="backdrop w-full h-full bg-black bg-opacity-90"></div>
              {children}
      </div>
    </>
  );
};

export default ModalWrapper;