import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitallstock',
  templateUrl: './kitallstock.component.html',
  styleUrls: ['./kitallstock.component.scss']
})
export class KitallstockComponent implements OnInit {
  stockList: any;

  constructor(private router: Router, private view: KitService) { }

  ngOnInit(): void {
    this.view.getAllStockList().subscribe( result => {
        this.stockList = result;
        console.log(this.stockList)
    });
  }

}
