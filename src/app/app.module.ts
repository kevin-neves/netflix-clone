import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainComponent } from './login-page/login-main/login-main.component';
import { ModalComponent } from './movies-page/modal/modal.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginFooterComponent } from './login-page/login-footer/login-footer.component';
import { UserMainComponent } from './user-page/user-main/user-main.component';
import { UserProfileComponent } from './user-page/user-profile/user-profile.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieCardComponent } from './movies-page/movie-card/movie-card.component';
import { BtnPlayComponent } from './movies-page/btn-play/btn-play.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginMainComponent,
    LoginFooterComponent,
    UserMainComponent,
    UserProfileComponent,
    MoviesPageComponent,
    MovieCardComponent,
    BtnPlayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
