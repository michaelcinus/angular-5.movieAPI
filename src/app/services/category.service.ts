import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { category } from '../model/category';

const baseUrl = 'http://sviluppo.jdk.it:8081/webapi/categories/'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  cateries?: category[];

  constructor( private http: HttpClient) { }
  
  getAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(baseUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  add( c: category): Observable<category> {
    return this.http.post<category>(baseUrl, c)
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
