import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { KitReturnRoutingModule,kitstock } from './kit-stock-details-routing.module';
  import { from } from 'rxjs';



@NgModule({
  declarations: [kitstock],
  imports: [
    CommonModule,
    KitReturnRoutingModule,
    FormsModule
  ]
})
export class KitStockDetailsModule { }
