import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Array<Movie> = [];
  selectedMovie!: Movie;
  viewMovie!: Movie;
  movieModel?: Movie;

  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAll()
  }

  addMovieEvent(m : Movie) {
    this.movieService.add(m).subscribe(movie =>{
      this.getAll();
    } );
  }

  selectionClick(m: Movie): void {
    this.selectedMovie = m;
  }

  viewClick(m: Movie): void {
    this.viewMovie = m;
  }

  deleteClick(m:Movie): void {
    this.movieService.delete(m.id).subscribe(movie =>{
      this.getAll();
    } );
  } 

  getAll():void{
    this.movieService.getAllMovie().subscribe(
      res => this.movies = res,
      err => console.log(err)
    )
  }

}
