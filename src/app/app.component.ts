import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
