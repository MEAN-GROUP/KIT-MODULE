import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitorderlistComponent } from './kitorderlist/kitorderlist.component';




const routes: Routes = [{path:"admin", children:[{path:"kitorderlist", component:KitorderlistComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitOrderListRoutingModule { }
export const kitorderlist=[KitorderlistComponent];
