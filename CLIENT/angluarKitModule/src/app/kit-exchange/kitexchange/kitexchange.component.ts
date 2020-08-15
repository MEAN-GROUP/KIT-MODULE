import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';

@Component({
  selector: 'app-kitexchange',
  templateUrl: './kitexchange.component.html',
  styleUrls: ['./kitexchange.component.scss']
})
export class KitexchangeComponent implements OnInit {

oldSerialNo:any;
newSerialNo:any;
remark:any;
exdata:any = { newSerialNo : "", remark : ""};

  constructor(private service : KitService) { }

  ngOnInit(): void {
  }


  exchnagekit() {
  this.exdata.newSerialNo = this.newSerialNo;
  this.exdata.remark = this.remark;
  // console.log(this.exdata);
  // console.log(this.oldSerialNo);
    this.service.exchangedata(this.oldSerialNo, this.exdata).subscribe(
         data =>console.log('sucess', data),
         error =>console.error('Error', error)
      );
  }

}
