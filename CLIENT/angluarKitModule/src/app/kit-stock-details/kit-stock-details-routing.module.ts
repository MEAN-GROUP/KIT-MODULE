import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitallstockComponent } from './kitallstock/kitallstock.component';
import { KitavailablestockComponent } from './kitavailablestock/kitavailablestock.component';





const routes: Routes = [{path:"admin", children:[
                        {path:"kitallstocks", component:KitallstockComponent},
                        {path:"kitavailablestock", component:KitavailablestockComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitReturnRoutingModule { }
export const kitstock=[KitallstockComponent,KitavailablestockComponent];
