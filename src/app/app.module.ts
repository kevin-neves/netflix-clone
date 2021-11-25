import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieCardComponent } from './movies-page/movie-card/movie-card.component';
import { ModalComponent } from './movies-page/modal/modal.component';
import { BtnPlayComponent } from './movies-page/btn-play/btn-play.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MovieCardComponent,
    ModalComponent,
    BtnPlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
