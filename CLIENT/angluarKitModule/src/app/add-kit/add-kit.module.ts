import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKitRoutingModule, addkit } from './add-kit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [addkit],
  imports: [
    CommonModule,
    AddKitRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddKitModule { }
