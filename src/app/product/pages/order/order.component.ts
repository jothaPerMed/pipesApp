import { Component } from '@angular/core';
import { Hero, color } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero= 'name';

  public heroList: Hero[] = [
    { name: 'Superman', canFly: true, color: color.blue },
    { name: 'Spiderman', canFly: false, color: color.red },
    { name: 'Aquaman', canFly: false, color: color.black },
    { name: 'Joker', canFly: false, color: color.green },
    { name: 'Flash', canFly: false, color: color.red },
  ]

  public toogleUpperCase(): void {
    this.isUpperCase ? this.isUpperCase = false : this.isUpperCase = true;

  }


  public changeOrder(value : keyof Hero):void{
    this.orderBy=value;
  }



}
