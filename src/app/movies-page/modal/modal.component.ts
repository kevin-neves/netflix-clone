import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService, MovieInterface } from 'src/app/app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id: number;
  @Output() hiddenModal: EventEmitter<boolean> = new EventEmitter;

  // Movie infos:
  backgroundImage: string = ''
  relevance: number = 0
  year: number = 0
  classification: number = 0
  time: string = ''
  season: string = ''
  description: string = ''
  cast: string = ''
  genre: string = ''
  scenes: string = ''
  title: string = ''

  loading: boolean = true;

  constructor(private appService: AppService) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.getInfo(this.id)
  }

  closeModal() {
    this.hiddenModal.emit();
  }

  cancelBubbling(event: Event) {
    event.stopPropagation()
  }

  getInfo(id: number) {
    this.appService.getMovieInfo(id).subscribe((resp: MovieInterface) => {
      this.backgroundImage = resp.backgroundImage.replace("()", "")
      this.relevance = resp.relevance
      this.year = resp.year
      this.classification = resp.minAge
      this.time = resp.time ? this.transform(resp.time) : ''
      this.season = resp.season || ''
      this.description = resp.description
      this.title = resp.titleImage
      this.cast = resp.cast.join(', ')
      this.genre = resp.genre.join(', ')
      this.scenes  =resp.scenes.join(', ')

      this.loading = false;
    })
  }

  transform(minutes: number): string {
    const hours = Math.floor(minutes/60);
    const minutesLeft = minutes % 60;
    return `${hours}h ${minutesLeft < 10 ? '0': ''}${minutesLeft}min`
  }


}
