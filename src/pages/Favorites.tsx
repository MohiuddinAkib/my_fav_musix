import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import FavCategory from "../components/favorite/FavCategory";
import FavoriteList from "../components/favorite/FavoriteList";

const Favorites = () => {
  return (
    <BaseLayout
      leftChildren={<FavCategory />}
      rightChildren={<FavoriteList />}
    />
  );
};

export default Favorites;
