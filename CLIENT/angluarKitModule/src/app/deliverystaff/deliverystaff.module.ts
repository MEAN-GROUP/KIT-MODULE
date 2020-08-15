import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryStaffRoutingModule, deliverystaff } from './deliverystaff-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDeliveryStaffFilterPipe } from '../listdeliverystafffilter.pipe';





@NgModule({
  declarations: [deliverystaff, ListDeliveryStaffFilterPipe],
  imports: [
    CommonModule,
    DeliveryStaffRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ListDeliveryStaffFilterPipe
  ]
})
export class DeliverystaffModule { }
