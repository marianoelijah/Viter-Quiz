import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <form action="" className="relative">
        <input
          type="text"
          placeholder="Search Keyword"
          className="p-1.5 bg-secondary border border-line rounded-md outline-none pl-8 place-holder:opacity:30 placeholder:text-sm w-[250px] block focus:border-accent"
        />
        <Search className="absolute bottom-2.5 left-2 opacity-50" size={18} />
      </form>
    </>
  );
};

export default SearchBar;