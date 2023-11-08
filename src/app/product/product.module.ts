import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    OrderComponent,
    //Pipes
    ToogleCasePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PrimeNgModule

  ]
})
export class ProductModule { }
