import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist.interface';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  playlists: Observable<Playlist[]>

  constructor(
    private service: HomepageService
  ) {
    this.playlists = service.getPlaylists()
  }

  ngOnInit(): void {
  }

}
