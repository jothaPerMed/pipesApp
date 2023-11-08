import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { BasicPageComponent } from 'src/app/product/pages/basic-page/basic-page.component';
import { NumberPageComponent } from 'src/app/product/pages/number-page/number-page.component';
import { UncommonPageComponent } from 'src/app/product/pages/uncommon-page/uncommon-page.component';

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
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink:'uncommon'
          }
        ]
      },
      {
      label: 'Pipes Personalizados',
      icon: PrimeIcons.COG,
      items:[
        {
          label: 'Custom Pipes',
          icon: PrimeIcons.COG,
          routerLink:'custom'
        }
      ]
    }

    ];
  }
}
