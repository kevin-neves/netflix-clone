import { Component, OnInit } from '@angular/core';
import { AppService, MoviesListId, UserInterface } from '../app.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  popularId: number[] = []
  keepWatchingId: number[] = []
  headerInfo: any = [];
  loading: boolean = false

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loading = true;
    this.login()
    this.loadPage(1)
    this.createHeader()
  }

  loadPage(userId: number) {
    this.appService.getUserMoviesId(userId).subscribe((resp: MoviesListId) => {
      const { popular, keepWatching } = resp;
      this.popularId = popular;
      this.keepWatchingId = keepWatching;
      console.log(this.popularId) 
    })
  }

  createHeader() {
    this.appService.getMovieInfo(1).subscribe((resp: any) => {
      this.headerInfo = resp;
      this.loading = false;
    })
  }

  login() {
    this.appService.login('kjneves', '*****').subscribe((resp: UserInterface)=> {
      console.log(resp)
    })
  }

}
