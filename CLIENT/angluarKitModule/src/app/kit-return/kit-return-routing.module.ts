import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitreturnComponent } from './kitreturn/kitreturn.component';





const routes: Routes = [{path:"delivery", children:[
                        {path:"kitreturn", component:KitreturnComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitReturnRoutingModule { }
export const kitreturn=[KitreturnComponent];
