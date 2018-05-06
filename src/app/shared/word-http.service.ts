import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IWord } from './iword';

@Injectable()
export class WordHttpService {
  url = 'http://127.0.0.1:8000/api/word/';
  constructor(private _http: HttpClient) { }

  getWords(): Observable<IWord[]> {
    return this._http.get<IWord[]>(this.url);
  }
}
