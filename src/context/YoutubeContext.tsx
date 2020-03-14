import React from "react";
import { FavSong } from "../interfaces/FavSong";
import useYoutubeSearchByVideoIds from "../hooks/youtube/useYoutubeSearchByVideoIds";
import useYoutubeSearchByVideoQuery from "../hooks/youtube/useYoutubeSearchByVideoQuery";

const initialState = {};

export const YoutubeContext = React.createContext(initialState);

export const Provider: React.FC = props => {
  const [vids, setVids] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState<string>("");
  const [mood, setMood] = React.useState("sad_mood");
  const [error, setError] = React.useState(undefined);
  const [songLang, setSongLang] = React.useState("english");
  const [thagoreFavIds] = React.useState<FavSong[]>([
    {
      lang: "bangla",
      songIds: ["Mhsf5dLNDmg", "8gm5XcAjdms"]
    }
  ]);
  const [rockFavIds] = React.useState<FavSong[]>([
    {
      lang: "english",
      songIds: [
        "LYU-8IFcDPw",
        "ScNNfyq3d_w",
        "dxytyRy-O1k",
        "UceaB4D0jpo",
        "i8Zi1DM7iR4"
      ]
    },
    {
      lang: "bangla",
      songIds: ["t-_SbDuqxQc", "60M4NlUuSD0", "qw1CVt43VKw", "avanX3i9jbU"]
    }
  ]);
  const [sadFavIds] = React.useState<FavSong[]>([
    {
      lang: "english",
      songIds: [
        "Gd9OhYroLN0",
        "v2H4l9RpkwM",
        "kXYiU_JCYtU",
        "w5GrxfjuTTI",
        "AM_2uWLlBKo",
        "zsCD5XCu6CM",
        "5qF_qbaWt3Q"
      ]
    },
    {
      lang: "bangla",
      songIds: ["Sm-r3vAHsU4", "X4vqI0LUPaY", "vOIqVQ76Iug", "Gpb2ipPLAjg"]
    }
  ]);
  const [playing, setPlaying] = React.useState(false);
  const [playingVid, setPlayingVid] = React.useState("");
  const [showAbout, setShowAbout] = React.useState(false);

  const vByQueryResult = useYoutubeSearchByVideoQuery(query);

  const vByIdResult = useYoutubeSearchByVideoIds(vids);

  React.useEffect(() => {
    const data = vByQueryResult[0].data;
    if (data) {
      setVids(data.items.map(item => item.id.videoId));
    }
  }, [
    vByQueryResult[0].data,
    vByQueryResult[0].loading,
    vByQueryResult[0].error
  ]);

  return (
    <YoutubeContext.Provider
      value={{
        query,
        setQuery,
        vByQueryResult,
        vByIdResult,
        playing,
        setPlaying,
        playingVid,
        setPlayingVid,
        showAbout,
        setShowAbout,
        mood,
        setMood,
        sadFavIds,
        songLang,
        setSongLang,
        error,
        setError,
        rockFavIds,
        thagoreFavIds
      }}
    >
      {props.children}
    </YoutubeContext.Provider>
  );
};
