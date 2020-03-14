import React from "react";
import SearchVideo from "../components/search/SearchVideo";
import SearchResults from "../components/search/SearchResults";
import BaseLayout from "../components/layout/BaseLayout";

const Search = () => {
  return (
    <BaseLayout
      leftChildren={<SearchVideo />}
      rightChildren={<SearchResults />}
    />
  );
};

export default Search;
