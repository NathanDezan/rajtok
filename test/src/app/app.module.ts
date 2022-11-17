import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Routes from './base-routes.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { MessageBoxComponent } from './message-box/message-box.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    PlaylistListComponent,
    MessageBoxComponent,
  ],
  imports: [
    BrowserModule,
    Routes,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
