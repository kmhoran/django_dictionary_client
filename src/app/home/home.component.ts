import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { WordHttpService } from '../shared/word-http.service';
import { IWord } from '../shared/iword';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordList: IWord[] = [];
  wordToAdd: string;

  constructor(
    private _zone: NgZone,
    private _wordService: WordHttpService,
    private _router: Router) {}

  ngOnInit() {
    this._wordService.getWords()
    .subscribe((data: IWord[]) => {
      this._zone.run(() => { this.wordList = data; });
    });
  }

  addWord() {
    // redirect to new word page upon creation
    const newWord: IWord = {
      id: 0,
      name: this.wordToAdd,
      definition_set: null
    };

    this._wordService.addWord(newWord)
    .subscribe((data: IWord) => {
      this._router.navigate(['/word', { id: data.id }]);
    });
  }

}
