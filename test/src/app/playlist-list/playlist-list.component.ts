import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../model/playlist.interface';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  @Input()
  playlists!: Playlist[] | null

  constructor() { }

  ngOnInit(): void {
  }

}
