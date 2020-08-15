import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitDetailsRoutingModule, kitdetails} from './kit-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitFilterPipe } from '../kitfilter.pipe';




@NgModule({
  declarations: [kitdetails, KitFilterPipe],
  imports: [
    CommonModule,
    KitDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
  KitFilterPipe
  ]
})
export class KitdetailsModule { }
