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

  menus = {
    logo: 'http://greengerong.com/rebirth/assets/img/wolf2.png',
    title: '破狼博客',
    home: './',
    menus: [
      {
        text: '@Rebirth/UI',
        router: ['./'],
        icon: 'glyphicon glyphicon-home'
      },
      {
        text: 'Components',
        children: [],
        icon: 'glyphicon glyphicon-fire'
      },
      {
        text: 'API Docs',
        url: '/ng2-rebirth-ui/compodocs/overview.html',
        target: '_blank',
        icon: 'glyphicon glyphicon-heart'
      },
      {
        text: '@Github',
        url: 'https://github.com/greengerong/ng2-rebirth-ui',
        target: '_blank',
        icon: 'glyphicon glyphicon-user'
      }
    ]
  };
}
