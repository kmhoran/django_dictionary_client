import { Component } from '@angular/core';

import { WordService } from './word/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WordService ]
})
export class AppComponent {
  title = 'app';
  isCollapsed = true;

  toggleMenuCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMenuCollapse(): void {
    this.isCollapsed = true;
  }
}
