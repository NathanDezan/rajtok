import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Playlist } from "../model/playlist.interface";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getPlaylists() : Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>("/api/playlists/searchall");
  }
}
