export interface URLShortener {
  id: string | undefined;
  originURL: string;
  shortURL: string | undefined;
  clicks: number | undefined;
}
