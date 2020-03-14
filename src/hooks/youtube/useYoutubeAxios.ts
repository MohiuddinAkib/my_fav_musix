import { makeUseAxios } from "axios-hooks";
import youtubeAxiosInstance from "../../utils/youtubeAxiosInstance";

export const useYoutubeAxios = makeUseAxios({
  axios: youtubeAxiosInstance
});
