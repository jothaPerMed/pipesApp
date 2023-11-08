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


  //i18nPlural
  public clients :string[]= [
    'Maria',
    'Juan',
    'Pedro',
    'Ana',
    'Cristina',
    'Alberto'
  ];
public clientsMap ={
  '=0': 'No tenemos ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  '=2': 'tenemos 2 clientes esperando.',
  'other':'tenemos # clientes esperando.'

}

  public deletClient(){
    this.clients.shift();
  }


}
