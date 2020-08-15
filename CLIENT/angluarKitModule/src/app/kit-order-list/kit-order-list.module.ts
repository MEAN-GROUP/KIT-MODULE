import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitOrderListRoutingModule, kitorderlist } from './kit-order-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListFilterPipe } from '../orderlistfilter.pipe';




@NgModule({
  declarations: [kitorderlist, OrderListFilterPipe],
  imports: [
    CommonModule,
    KitOrderListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  OrderListFilterPipe
  ]
})
export class KitOrderListModule { }
