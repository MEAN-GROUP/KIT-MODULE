import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { kitdata } from '../../kitdata';
import { KitService } from '../../kit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addkit',
  templateUrl: './addkit.component.html',
  styleUrls: ['./addkit.component.scss']
})
export class AddkitComponent implements OnInit {

  addkit: any;

  constructor(private router:Router,private route:ActivatedRoute, private add:KitService) { 

  }

   onadd()
  {
        this.add.insertkitdata(this.data).subscribe( result => {
          console.log('sucess', result);
          alert('Data added succefully.')
          this.data = new kitdata("", "");
        },
        error =>console.error('Error', error)
        
      );
        
  }

    data = new kitdata("","");

  ngOnInit(): void {
  }

}
