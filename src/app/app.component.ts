import { Component } from '@angular/core';

import { WordHttpService } from './shared/word-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WordHttpService ]
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
