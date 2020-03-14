import React from "react";
import SadSongs from "../SadSongs";
import RockSongs from "../RockSongs";
import { YoutubeContext } from "../../../context/YoutubeContext";

const FavoriteList = () => {
  const context: any = React.useContext(YoutubeContext);

  switch (context.mood) {
    case "sad_mood":
      return <SadSongs />;

    case "rock_mood":
      return <RockSongs />;

    case "thagore_mood":
      return <RockSongs />;

    default:
      return <SadSongs />;
  }
};

export default FavoriteList;
