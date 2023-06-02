import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarItems = [
    {
      title: 'Category 1',
      isOpen: false,
      subItems: [
        { title: 'Subcategory 1', route: '/subcategory1' },
        { title: 'Subcategory 2', route: '/subcategory2' },
        // Add more subitems as needed
      ]
    },
    {
      title: 'Category 2',
      isOpen: false,
      subItems: [
        { title: 'Subcategory 3', route: '/subcategory3' },
        { title: 'Subcategory 4', route: '/subcategory4' },
        // Add more subitems as needed
      ]
    },
    // Add more sidebar items as needed
  ];

  toggleAccordion(item: any) {
    item.isOpen = !item.isOpen;
  }
}