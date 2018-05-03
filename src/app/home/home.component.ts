import { Component, OnInit } from '@angular/core';

import { WordHttpService } from '../shared/word-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _wordService;

  constructor(wordService: WordHttpService, ) {
    this._wordService = wordService;
  }

  ngOnInit() {
  }

}
