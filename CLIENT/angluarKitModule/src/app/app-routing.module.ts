import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { AddDeliverystaffComponent } from './deliverystaff/adddeliverystaff/adddeliverystaff.component';
import { ListdeliverystaffComponent } from './deliverystaff/listdeliverystaff/listdeliverystaff.component';
import { ViewdeliverylistComponent } from './deliverystaff/viewdeliverylist/viewdeliverylist.component';
import { AddkitComponent } from './add-kit/addkit/addkit.component';
import { KitreturnComponent } from './kit-return//kitreturn/kitreturn.component';
import { KitexchangeComponent } from './kit-exchange/kitexchange/kitexchange.component';
import { KitorderlistComponent } from './kit-order-list/kitorderlist/kitorderlist.component';
import { KitallstockComponent } from './kit-stock-details/kitallstock/kitallstock.component';
import { KitdetailsComponent } from './kit-details/kitdetails/kitdetails.component';



const routes: Routes = [{path:"admin", component:AdminComponent, children:[
                        {path:"adddeliverystaff", component:AddDeliverystaffComponent},
                        {path:"listdeliverystaff", component:ListdeliverystaffComponent},
                        {path:"", component:KitorderlistComponent},
                        {path:"kitallstocks", component:KitallstockComponent},
                        {path:"kitdetails", component:KitdetailsComponent},
                        {path:"addkit", component:AddkitComponent}]},
                        {path:"delivery", component:DeliveryComponent, children:[
                        {path:"Viewdeliverylist", component:ViewdeliverylistComponent},
                        {path:"kitreturn", component:KitreturnComponent},
                        {path:"kitexchange", component:KitexchangeComponent}]},
                       {path:"", component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const mainroute=[AdminComponent,DeliveryComponent,LoginComponent];
