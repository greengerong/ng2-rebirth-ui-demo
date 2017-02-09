import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: Date;
  items = [
    { id: 1, title: 'Panel header 1', content: 'Panel header 1' },
    { id: 2, title: 'Panel header 2', content: 'Panel header 2' }
  ];
}
