import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLShortener } from '../models/url-shortner';

@Injectable({
  providedIn: 'root',
})
export class UrlShortnerService {
  constructor(private httpClient: HttpClient) {}

  getAllData() {
    return this.httpClient.get<URLShortener[]>('/api');
  }

  generateShortUrl(originURL: string) {
    return this.httpClient.put<URLShortener>('/api', { originURL: originURL });
  }

  getOriginalURL(shortURL: string | null) {
    return this.httpClient.post<URLShortener>('/api', { shortURL: shortURL });
  }
}
