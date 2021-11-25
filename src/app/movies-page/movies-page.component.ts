import { Component, OnInit } from '@angular/core';
import { AppService, MovieInterface, MoviesListId } from '../app.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  popularId: number[] = []
  keepWatchingId: number[] = []
  id: number = 1

  headerBackground: string = ''
  headerTitle: string = ''
  headerDescription: string = ''

  loading: boolean = false

  userId: number = 0
  hidden: boolean = true

  // Change apperance of navbar on scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('header') as HTMLElement;    
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header-change');
    } else {
      element.classList.remove('header-change');
    }
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loading = true;
    this.loadPage(1)
    this.createHeader(1)
  }

  loadPage(userId: number) {
    this.appService.getUserMoviesId(userId).subscribe((resp: MoviesListId) => {
      const { popular, keepWatching } = resp;
      this.popularId = popular;
      this.keepWatchingId = keepWatching;
    })
  }

  createHeader(id: number) {
    this.appService.getMovieInfo(id).subscribe((resp: MovieInterface) => {
      this.headerBackground = resp.backgroundImage;
      this.headerTitle = resp.titleImage;
      this.headerDescription = resp.description;
      this.loading = false;
    })
  }

  showModal(id: number) {
    this.id = id;
    this.hidden = false
  }

  hideModal() {
    this.hidden = true
  }
}