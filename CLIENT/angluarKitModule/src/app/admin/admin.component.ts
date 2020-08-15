import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sub:any;
  username:any;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

      this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.username = +params['username'] || 0;
        console.log(this.username);
      });
  }

}
