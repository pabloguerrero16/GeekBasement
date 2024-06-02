import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="search-bar">
      <form
        onSubmit={SearchHandler}
        className="search-form d-flex align-items-center"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
