import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {


  public name : string = 'Fernando'
  public gender : 'male'|'female'='male'
  public invitationMap ={
    'male': 'invitarlo',
    'female':'invitarla'
  }


  public changeClient(){
    this.name='Melisa';
    this.gender='female';
  }
}
