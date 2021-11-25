import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { LoginMainComponent } from './login-page/login-main/login-main.component';
import { UserMainComponent } from './user-page/user-main/user-main.component';

const routes: Routes = [
  {path: 'login', component: LoginMainComponent},
  {path: 'users', component: UserMainComponent},
  {path: 'movies', component: MoviesPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
