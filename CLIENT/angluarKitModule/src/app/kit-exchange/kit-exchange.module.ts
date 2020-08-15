import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitExchangeRoutingModule,kitexchange } from './kit-exchange-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [kitexchange],
  imports: [
    CommonModule,
    KitExchangeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KitExchangeModule { }
