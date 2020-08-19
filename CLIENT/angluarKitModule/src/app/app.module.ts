import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,mainroute } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddKitModule } from './add-kit/add-kit.module';
import { KitdetailsModule } from './kit-details/kitdetails.module';
import { KitheaderComponent } from './kitheader/kitheader.component';
import { KitfooterComponent } from './kitfooter/kitfooter.component';
import { KitOrderListModule } from './kit-order-list/kit-order-list.module';
import { KitExchangeModule } from './kit-exchange/kit-exchange.module';
import { KitReturnModule } from './kit-return/kit-return.module';
import { KitStockDetailsModule } from './kit-stock-details/kit-stock-details.module';
import { KitService } from './kit.service';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestheaderComponent } from './testheader/testheader.component';
import { DeliverystaffModule } from './deliverystaff/deliverystaff.module';





@NgModule({
  declarations: [
    AppComponent,
    KitheaderComponent,
    KitfooterComponent,
    TestheaderComponent,
    mainroute
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AddKitModule,
    KitdetailsModule,
    KitOrderListModule,
    KitExchangeModule,
    KitReturnModule,
    DeliverystaffModule,
    KitStockDetailsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,

  ],
  // exports:[KitheaderComponent,KitfooterComponent,TestheaderComponent],
  providers: [KitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
