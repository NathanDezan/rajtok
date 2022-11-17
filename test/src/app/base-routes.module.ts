import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PlaylistComponentComponent } from './playlist-component/playlist-component.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { RegisterComponent } from './register/register.component';

export default RouterModule.forRoot([
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'playlists', component: PlaylistListComponent}
]);
