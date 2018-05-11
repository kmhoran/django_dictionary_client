import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IWord, IDefinition } from './iword';
import { HttpResponse } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class WordHttpService {
  wordUrl = 'http://127.0.0.1:8000/api/word/';
  definitionUrl = 'http://127.0.0.1:8000/api/definition/';



  constructor(private _http: HttpClient) { }

  getWords(): Observable<IWord[]> {
    return this._http.get<IWord[]>(this.wordUrl)
    .pipe(catchError(this.handleError));
  }

  getWord(id: number): Observable<IWord> {
    const url = this.wordUrl.concat(id.toString(), '/');
    return this._http.get<IWord>(url)
    .pipe(catchError(this.handleError));
  }

  addWord(word: IWord): Observable<IWord> {
    return this._http.post<IWord>(this.wordUrl, word, httpOptions)
    .pipe(catchError(this.handleError));
  }

  addDefinition(definition: IDefinition): any {
    return this._http.post(
      this.definitionUrl,
      definition,
      httpOptions)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
