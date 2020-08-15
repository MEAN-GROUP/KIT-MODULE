import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitexchangeComponent } from './kitexchange/kitexchange.component';




const routes: Routes = [{path:"delivery", children:[
                        {path:"kitexchange", component:KitexchangeComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitExchangeRoutingModule { }
export const kitexchange=[KitexchangeComponent];
