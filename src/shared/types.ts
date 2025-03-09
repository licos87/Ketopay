export type TServerResponse = {
  abstract: string;
  web_url: string;
  multimedia: [];
  pub_date: string;
  source: string;
};

export type TNews = {
  abstract: string;
  webUrl: string;
  multimedia: multimedia[];
  pubDate: string;
  source: string;
};

type multimedia = {
  caption: null;
  credit: null;
  crop_name: string;
  height: number;
  legacy: {
    thumbnail: string;
    thumbnailwidth: number;
    thumbnailheight: number;
  };
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
};

declare global {
  interface Object {
    groupBy<T>(
      list: T[],
      keyGetter: (item: T) => string
    ): { [key: string]: T[] };
  }
}