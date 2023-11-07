import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  public items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'New',
              icon: PrimeIcons.PLUS,
          },
          {
              label: 'Delete',
              icon: PrimeIcons.TRASH
          }
      ];
  }
}
