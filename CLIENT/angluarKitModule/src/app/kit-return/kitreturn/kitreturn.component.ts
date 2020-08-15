import { Component, OnInit } from '@angular/core';
import { KitService } from '../../kit.service';


@Component({
  selector: 'app-kitreturn',
  templateUrl: './kitreturn.component.html',
  styleUrls: ['./kitreturn.component.scss']
})
export class KitreturnComponent implements OnInit {

serialNo:any;
  constructor(private update:KitService) {}
 

onreturn()
{
   let kBody={status: "Returned"};
         this.update.updatereturndata(this.serialNo ,kBody).subscribe(
         data =>console.log('sucess', data),
         error =>console.error('Error', error)
      );
      this.serialNo="";
}
  ngOnInit(): void {
  }

}
