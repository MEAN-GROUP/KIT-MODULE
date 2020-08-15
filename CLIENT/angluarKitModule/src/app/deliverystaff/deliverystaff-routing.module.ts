import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDeliverystaffComponent } from './adddeliverystaff/adddeliverystaff.component';
import { ListdeliverystaffComponent } from './listdeliverystaff/listdeliverystaff.component';
import { ViewdeliverylistComponent } from './viewdeliverylist/viewdeliverylist.component';



const routes: Routes = [{path:"admin", children:[
                        {path:"adddeliverystaff", component:AddDeliverystaffComponent},
                        {path:"listdeliverystaff", component:ListdeliverystaffComponent},
                        {path:"Viewdeliverylist", component:ViewdeliverylistComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryStaffRoutingModule { }
export const deliverystaff=[AddDeliverystaffComponent,ListdeliverystaffComponent,ViewdeliverylistComponent];
