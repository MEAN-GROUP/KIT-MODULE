import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';
import { Router } from '@angular/router';
import { deliverylistdata } from '../../deliverylistdata';

@Component({
  selector: 'app-listdeliverystaff',
  templateUrl: './listdeliverystaff.component.html',
  styleUrls: ['./listdeliverystaff.component.scss']
})
export class ListdeliverystaffComponent implements OnInit {

deliverystaffdata: any;
viewDetail: any;
searchString: string;

  constructor(private router: Router, private view: KitService) { }

  ngOnInit(): void {
    this.view.getDeliveryStaffList().subscribe((result) => {
    console.log(result)
        this.deliverystaffdata = JSON.parse(JSON.stringify(result))
    });
    this.viewDetail = {};
  }
  viewEditDetail(x) {
    this.viewDetail = x;
    this.data.name = this.viewDetail.name,
    this.data.email = this.viewDetail.email,
    this.data.fathername = this.viewDetail.fathername,
    this.data.dob = this.viewDetail.dob,
    this.data.licenseno = this.viewDetail.licenseno,
    this.data.mobileno = this.viewDetail.mobileno,
    this.data.gender = this.viewDetail.gender,
    this.data.address = {
          street: this.viewDetail.address.street,
          city: this.viewDetail.address.city,
          postalcode: this.viewDetail.address.postalcode,
          country: this.viewDetail.address.country
    }
  }


  viewDeleteDetail(x) {
    this.viewDetail = x;
  }

   editdata(){
  
    this.view.updateDeliveryStaffData(this.viewDetail.empId, this.data).subscribe( result => {
        console.log('sucess', result);
          alert( result.message);
        });
        error =>console.error('Error', error)
        
      }

  delete(empId){
  console.log(empId);
      this.view.deleteDeliveryStaffData(empId).subscribe( result => {
      console.log('sucess', result);
          alert( result.message);
        });
        error =>console.error('Error', error)
  }

  data = new deliverylistdata("","","","","",0,"",{street:"",city:"",postalcode:"",country:""})

}
