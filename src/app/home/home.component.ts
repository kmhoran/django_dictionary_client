import { Component, OnInit, NgZone } from '@angular/core';



import { WordHttpService } from '../shared/word-http.service';
import { IWord } from '../shared/iword';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordList: IWord[] = [];

  response: any;
  constructor(private _zone: NgZone, private _wordService: WordHttpService) {}

  ngOnInit() {
    this._wordService.getWords()
    .subscribe((data: IWord[]) => {
      this._zone.run(() => {
        this.wordList = data;
        console.log('got data! ', data);
        console.log('got word!', this.wordList);
    });
    });
  }

}
