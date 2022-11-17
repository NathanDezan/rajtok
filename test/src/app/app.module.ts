import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Routes from './base-routes.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistComponentComponent } from './playlist-component/playlist-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    HomeComponent,
    PlaylistListComponent,
    PlaylistComponentComponent
  ],
  imports: [
    BrowserModule,
    Routes,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
