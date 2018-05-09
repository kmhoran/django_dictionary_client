import { Component, OnInit, NgZone } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { WordHttpService } from '../shared/word-http.service';
import { IWord } from '../shared/iword';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordId = null;
  word: IWord;
  constructor(private _route: ActivatedRoute,
              private _zone: NgZone,
              private _wordService: WordHttpService) {}


  ngOnInit() {
    this.wordId = this._route.snapshot.paramMap.get('id');

    this._wordService.getWord(this.wordId)
    .subscribe((data: IWord) => {
      this._zone.run(() => {
        this.word = data;
        console.log(this.word);
      });
    });
  }

}
