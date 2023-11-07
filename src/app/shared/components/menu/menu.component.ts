import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE
          }
        ]
      },
      {
      label: 'Pipes Personalizados',
      icon: PrimeIcons.COG,
      items:[
        {
          label: 'Otro elemento',
          icon: PrimeIcons.COG
        },
        {
          label: 'Otro elemento',
          icon: PrimeIcons.COG
        }
      ]
    }

    ];
  }
}
