import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from '../model/movie';

const baseUrl = 'http://sviluppo.jdk.it:8081/webapi/movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie?: Movie[];

  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  add(m: Movie): Observable<Movie> {
    return this.http.post<Movie>(baseUrl, m)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  delete(id?: number) {
    return this.http.delete<Movie[]>(baseUrl+id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
