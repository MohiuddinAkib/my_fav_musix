import React from "react";
import { useYoutubeAxios } from "./useYoutubeAxios";

const getParams = (vids: string | string[]) => ({
  key: process.env["REACT_APP_YOUTUBE_SEARCH_API_KEY"],
  id: Array.isArray(vids) ? vids.join(",") : vids,
  part: "snippet,contentDetails",
  maxResults: 9
});

const useYoutubeSearchByVideoIds = (vids: string | string[]) => {
  const hook = useYoutubeAxios(
    {
      params: getParams(vids),
      url: "videos"
    },
    { manual: true }
  );

  React.useEffect(() => {
    if (vids.length > 0) {
      hook[1]();
    }
  }, [vids]);

  return hook;
};

export default useYoutubeSearchByVideoIds;
