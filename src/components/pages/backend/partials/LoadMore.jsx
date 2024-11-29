import { StoreContext } from "@/components/store/storeContext";
import React from "react";

const LoadMore = () => {
  return (
    <>
      <div className="text-center py-2 mt-5">
        <button className="text-body hover:text-accent transition-all">
          Load More
        </button>
      </div>
    </>
  );
};

export default LoadMore;