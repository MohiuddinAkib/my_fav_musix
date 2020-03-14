import React from "react";
import { useYoutubeAxios } from "./useYoutubeAxios";
import { AxiosRequestConfig, AxiosPromise } from "axios";
import { ResponseValues, RefetchOptions } from "axios-hooks";
import { IYoutubeSearch } from "../../interfaces/IYoutubeSearch";

const getParams = (q: string) => ({
  key: process.env["REACT_APP_YOUTUBE_SEARCH_API_KEY"],
  part: "snippet",
  q,
  type: "video",
  maxResults: 9
});

const useYoutubeSearchByVideoQuery = (
  q: string = "Amar har kala korlam re by Alamgir"
) => {
  const hook = useYoutubeAxios(
    {
      params: getParams(q),
      url: "search"
    },
    { manual: true }
  ) as [
    ResponseValues<IYoutubeSearch>,
    (
      config?: AxiosRequestConfig | undefined,
      options?: RefetchOptions | undefined
    ) => AxiosPromise<IYoutubeSearch>
  ];

  React.useEffect(() => {
    if (q !== "") {
      hook[1]();
    }
  }, [q]);

  return hook;
};

export default useYoutubeSearchByVideoQuery;
