import { Injectable } from '@angular/core';

import { IWord, IDefinition } from './iword';

@Injectable()
export class WordService {

  constructor() { }

  getWords(): IWord[] {
    return ;
  }
}
