import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../playlist.interface';

@Component({
  selector: 'app-playlist-list-item',
  templateUrl: './playlist-list-item.component.html',
  styleUrls: ['./playlist-list-item.component.css']
})
export class PlaylistListItemComponent implements OnInit {

  @Input()
  playlist!: Playlist

  constructor() { }

  ngOnInit(): void {
  }

}
