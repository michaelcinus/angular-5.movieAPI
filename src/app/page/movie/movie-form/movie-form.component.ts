import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movie_: Movie = {};
  movieModel: Movie = {};

  @Input()
  set movie (m:Movie) {
    this.movie_ = m;
    this.movieModel.id = m.id;
    this.movieModel.nome = m.nome;
    this.movieModel.descrizione = m.descrizione;
    this.movieModel.anno = m.anno;
  }

  get movie () {
    return this.movie_
  }

  @Output()
  feedbackEv: EventEmitter<Movie>

  constructor() {
    this.feedbackEv = new EventEmitter<Movie>();
   }

  ngOnInit(): void {
  }

  submit(){
    this.feedbackEv.emit(this.movieModel);
    this.movieModel = {};
  }

}
