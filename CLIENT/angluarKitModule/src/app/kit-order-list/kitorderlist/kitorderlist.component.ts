import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';
import { deliveryorderdata } from '../../deliveryorderdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitorderlist',
  templateUrl: './kitorderlist.component.html',
  styleUrls: ['./kitorderlist.component.scss']
})
export class KitorderlistComponent implements OnInit {
orderdata:any;
deliverydata: any;
viewdetail:any;
searchString: string;
  constructor(private order:KitService, private router:Router) {
    
   }
adddeliveryorderlist(){
      console.log(this.data);   
       this.order.insertdeliveryorderlistdata(this.data).subscribe( result => {
          console.log('sucess', result);
          alert('Delivery order list added succefully.');
         this.data = new deliveryorderdata("","","","","",0,"",{ street:"",city:"",postalcode:"",country:""});

        },
        error =>console.error('Error', error)
        
      );
  }
  ngOnInit(): void {

     let resp = this.order.getOrderList().subscribe((data)=>{ 
    this.orderdata = JSON.parse(JSON.stringify(data))
    });
    this.viewdetail = {};

    let res = this.order.getDeliveryStaffList().subscribe((data)=>{ 
    this.deliverydata = JSON.parse(JSON.stringify(data))
    });
    
    
  }

  
orderdetails(x)
{
this.viewdetail = x;
this.data.PatientName = this.viewdetail.PatientName;
this.data.patientId = this.viewdetail.patientId;
this.data.fathername = this.viewdetail.fatherName;
this.data.kitType = this.viewdetail.kitType;
this.data.dateTime = this.viewdetail.dateTime;
this.data.mobileno = this.viewdetail.mobile;
this.data.address = {
      street: this.viewdetail.address.street,
      city: this.viewdetail.address.city,
      postalcode: this.viewdetail.address.pin,
      country: this.viewdetail.address.country }
}
data = new deliveryorderdata("","","","","",0,"",{ street:"",city:"",postalcode:"",country:""});
}
