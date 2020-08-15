import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitReturnRoutingModule, kitreturn } from './kit-return-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [kitreturn],
  imports: [
    CommonModule,
    KitReturnRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KitReturnModule { }
