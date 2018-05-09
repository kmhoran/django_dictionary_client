import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IWord } from './iword';

@Injectable()
export class WordHttpService {
  wordUrl = 'http://127.0.0.1:8000/api/word/';
  definitionUrl = 'http://127.0.0.1:8000/api/definition/';
  constructor(private _http: HttpClient) { }

  getWords(): Observable<IWord[]> {
    return this._http.get<IWord[]>(this.wordUrl);
  }

  getWord(id: number): Observable<IWord> {
    const url = this.wordUrl.concat(id.toString(), '/');
    return this._http.get<IWord>(url);
  }
}
