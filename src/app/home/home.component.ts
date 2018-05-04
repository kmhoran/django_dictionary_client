import { Component, OnInit } from '@angular/core';



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
  constructor(private _wordService: WordHttpService) {}

  ngOnInit() {
    this.wordList = this._wordService.getWords();
    this.response = this._wordService.getTEST()
    .subscribe((data: any) => this.response = data[0]);
  }

}
