import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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


  // KeyValuePipe

  public person={
    name:'Fernando',
    age:36,
    address:'Ottawa Canada'
  }


  // Async Pipe


  public myObservable = interval(2000).pipe(
    tap(value=> console.log('tap:',value))
  )


  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('tenemos otra promesa.')
    },3000)
  })

}
