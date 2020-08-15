import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KitService } from '../kit.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
valid:any= {};
data:any= {email:"", password: ""};


  constructor(private logvalide:KitService , private route:Router) { }
  ngOnInit(): void {
  }

login(){
    this.data.email = this.email;
    this.data.password = this.password;
    console.log(this.data.email, this.data.password);
      this.logvalide.loginvalidation(this.data).subscribe(result =>{
        this.valid = result;
      console.log(result);
       console.log(this.valid.role);
    if(this.valid.role == "admin"){
      console.log("adminpage")
     this.route.navigate(['/admin'],  { queryParams: { username: this.valid.email } });  
   }
      else if(this.valid.role == "deliverystaff")
   {
      this.route.navigate(['/delivery'], { queryParams: { username: this.valid.email } });
   }
    else {
       alert("Please enter a valid Username and Password");
   }
   })
 
}

}
