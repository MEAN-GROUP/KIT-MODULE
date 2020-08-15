import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"admin", component:AdminComponent},
                        {path:"delivery", component:DeliveryComponent},
                       {path:"", component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
