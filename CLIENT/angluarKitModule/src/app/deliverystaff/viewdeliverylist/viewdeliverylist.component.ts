import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';
import { Router } from '@angular/router';
import { deliveryorderdata } from '../../deliveryorderdata';

@Component({
  selector: 'app-viewdeliverylist',
  templateUrl: './viewdeliverylist.component.html',
  styleUrls: ['./viewdeliverylist.component.scss']
})
export class ViewdeliverylistComponent implements OnInit {
deliveryorderdata: any;
viewDetail: any;
serialno:any;
searchString: string;
 deliveryempId: string;

  constructor(private router: Router, private view: KitService) { }
 
  ngOnInit(): void {
   console.log(this.deliveryempId);
    this.view.getViewDeliveryOrderList(this.deliveryempId).subscribe((result) => {
    console.log(result)
        this.deliveryorderdata = JSON.parse(JSON.stringify(result))
    });
   
    this.viewDetail = {}
  }
  vieworder(){
    console.log(this.deliveryempId);
    this.view.getViewDeliveryOrderList(this.deliveryempId).subscribe((result) => {
    console.log(result)
        this.deliveryorderdata = JSON.parse(JSON.stringify(result))
    });
       
  
  }

   viewEditDetail(x) {
  this.data.PatientName = x.PatientName;
  this.data.patientId = x.patientId;
  this.data.fathername = x.fathername;
  this.data.kitType = x.kitType;
  this.data.dateTime = x.dateTime;
  this.data.mobileno = x.mobileno;
  this.data.address = {
      street: x.address.street,
      city: x.address.city,
      postalcode: x.address.postalcode,
      country: x.address.country }    
  }

   confirmOrder(){
  
  console.log(this.serialno);
  console.log(this.data.patientId);
  let serialNo = this.serialno;
  let PatientId = {patientId:this.data.patientId};
    this.view.updateDeliverConfirm(serialNo, PatientId ).subscribe( result => {
        console.log('sucess', result);
          alert( result.message);
        });
        error =>console.error('Error', error)
        
      }

  data = new deliveryorderdata("","","","","",0,"",{street:"",city:"",postalcode:"",country:""})


}
