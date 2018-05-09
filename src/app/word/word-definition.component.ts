import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-word-definition',
  templateUrl: './word-definition.component.html',
  styleUrls: ['./word-definition.component.css']
})
export class WordDefinitionComponent implements OnInit {
  @Input() partOfSpeech: string;
  @Input() actualDefinition: string;

  constructor() { }

  ngOnInit() {
  }

}
