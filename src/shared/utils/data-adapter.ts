import { TNews, TServerResponse } from "../types";

export function dataAdapter(data:TServerResponse[]):TNews[] {
  return data.map((item) => ({
    abstract: item.abstract,
    webUrl: item.web_url,
    multimedia: item.multimedia,
    pubDate: item.pub_date,
    source: item.source,
  }));
}