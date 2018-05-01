import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    console.log('routeId : ', this._route.snapshot.paramMap.get('id'));
    this.wordId = this._route.snapshot.paramMap.get('id');
  }

  wordId = null;
  ngOnInit() {
  }

}
