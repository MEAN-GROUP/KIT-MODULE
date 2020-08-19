import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitdetailsComponent } from './kitdetails/kitdetails.component';





const routes: Routes = [{path:"admin", children:[
                        {path:"kitdetails", component:KitdetailsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitDetailsRoutingModule { }
export const kitdetails=[KitdetailsComponent];
