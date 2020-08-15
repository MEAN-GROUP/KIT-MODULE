import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KitService } from '../../kit.service';
@Component({
  selector: 'app-adddeliverystaff',
  templateUrl: './adddeliverystaff.component.html',
  styleUrls: ['./adddeliverystaff.component.scss']
})
export class AddDeliverystaffComponent implements OnInit {
deliverypersonForm: any;
  constructor(private add:KitService) { 
    this.deliverypersonForm = new FormGroup({
        name : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required),
        fathername : new FormControl('', Validators.required),
        dob : new FormControl('', Validators.required),
        licenseno : new FormControl('', Validators.required),
        mobileno : new FormControl('', Validators.required),
        gender : new FormControl('', Validators.required),
          address : new FormGroup({
            street : new FormControl('', Validators.required),
            city : new FormControl('', Validators.required),
            postalcode : new FormControl('', Validators.required),
            country : new FormControl('', Validators.required),
          })
    })
  }

  ngOnInit(): void {
  }

adddeliveryperson(){
let data = this.deliverypersonForm.value;
this.add.insertdeliverystaffdata(data).subscribe( result => {
          console.log('sucess', result);
          alert( result.message)
          alert('Employee id :' + result.empId)
         this.deliverypersonForm.reset();
        },
        error =>console.error('Error', error)
        
      );


}

}
