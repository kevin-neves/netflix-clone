import { Component, Input, OnInit } from '@angular/core';
import { AppService, MovieInterface } from 'src/app/app.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  loading: boolean = false;
  image: string = '';

  @Input() id: number;

  constructor(private appService: AppService) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.loading = true;
    this.getInfo(this.id)  
  }

  getInfo(id: number) {
    this.appService.getMovieInfo(id).subscribe((resp: MovieInterface) => {
      this.image = resp.cardImage
      this.loading = false;
    })
  }

}
