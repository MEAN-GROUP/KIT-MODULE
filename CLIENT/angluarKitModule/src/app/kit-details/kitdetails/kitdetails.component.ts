import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';
import { Router } from '@angular/router';
// import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-kitdetails',
  templateUrl: './kitdetails.component.html',
  styleUrls: ['./kitdetails.component.scss']
})
export class KitdetailsComponent implements OnInit {


kitdata: any;
viewDetail: any;
searchString: string;
view1: any;

  constructor(private router: Router, private view: KitService) { }

  ngOnInit(): void {
    this.view.getAllKitList().subscribe((result) => {
    console.log(result)
        this.kitdata = JSON.parse(JSON.stringify(result))
    });
    this.viewDetail = {};
  }
  viewDeleteDetail(x) {
    this.viewDetail = x;
  }
  delete(serialNo){
      this.view.deleteData(serialNo).subscribe( result => {
      })
  }

}

