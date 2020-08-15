import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddkitComponent } from './addkit/addkit.component';



const routes: Routes = [{path:"admin", children:[
                        {path:"addkit", component:AddkitComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddKitRoutingModule { }
export const addkit=[AddkitComponent];
