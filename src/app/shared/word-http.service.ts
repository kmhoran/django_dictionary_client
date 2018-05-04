import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IWord } from './iword';

@Injectable()
export class WordHttpService {
  url = 'https://127.0.0.1:8000/api/word/';
  constructor(private _http: HttpClient) { }

  getWords(): IWord[] {
    return [
      {
        id: 1,
        name: 'one',
        definitions: null
      },
      {
        id: 2,
        name: 'two',
        definitions: null
      },
    ];
  }




getTEST() {
  return this._http.get(this.url);
}
}
