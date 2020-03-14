export interface Item {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: any;
}

export interface IYoutubeSearch {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}
