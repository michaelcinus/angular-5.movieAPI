import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  @Input()
  movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
