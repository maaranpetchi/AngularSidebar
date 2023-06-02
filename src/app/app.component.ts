import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSidebar';
  menuItems = [
    {
      title: 'Menu 1',
      active: false,
      subMenuItems: [
        { title: 'Sub Menu 1' },
        { title: 'Sub Menu 2' },
        { title: 'Sub Menu 3' }
      ]
    },
    {
      title: 'Menu 2',
      active: false,
      subMenuItems: [
        { title: 'Sub Menu 4' },
        { title: 'Sub Menu 5' }
      ]
    },
    {
      title: 'Menu 3',
      active: false,
      subMenuItems: [
        { title: 'Sub Menu 6' },
        { title: 'Sub Menu 7' },
        { title: 'Sub Menu 8' }
      ]
    }
  ];

  toggleSubMenu(item: any): void {
    item.active = !item.active;
  }
}
