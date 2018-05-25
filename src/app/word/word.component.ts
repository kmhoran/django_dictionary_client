import { Component, OnInit, NgZone } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { WordHttpService } from '../shared/word-http.service';
import { IWord, IDefinition } from '../shared/iword';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordId: number;
  word: IWord;
  definitionToAdd: string;
  definitionPartOfSpeech: string;
  partOfSpeechList = ['noun', 'adjective', 'verb', 'adverb'];

  constructor(private _route: ActivatedRoute,
              private _zone: NgZone,
              private _wordService: WordHttpService) {}


  ngOnInit() {
    this.wordId = +this._route.snapshot.paramMap.get('id');
    this.getPageWord();
  }

  getPageWord() {
    this._wordService.getWord(this.wordId)
    .subscribe((data: IWord) => {
      this._zone.run(() => {
        this.word = data;
      });
    });
  }


  addDefinition() {
    const newDefinition: IDefinition = {
        word: this.wordId,
        part_of_speech: this.definitionPartOfSpeech,
        definition: this.definitionToAdd
    };

    this._wordService.addDefinition(newDefinition)
    .subscribe((data: any) => {
      this._zone.run(() => {
        this.definitionToAdd = null;
        this.definitionPartOfSpeech = null;
        this.getPageWord();
      });
    });
  }

}
