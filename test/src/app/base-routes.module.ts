import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export default RouterModule.forRoot([
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'homepage', component: HomepageComponent}
]);
