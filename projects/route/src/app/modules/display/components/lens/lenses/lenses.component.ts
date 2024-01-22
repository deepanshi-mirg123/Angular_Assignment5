import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LensComponent } from '../lens.component';
import { LensService } from 'projects/route/src/app/services/lens.service';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.scss']
})
export class LensesComponent implements OnInit {
  lens: any;
  lensId: string | number | null;
  constructor( private activateRoute: ActivatedRoute, private service: LensService){
  
  }
  ngOnInit(): void {

   this.lensId =  this.activateRoute.snapshot.paramMap.get('id');
   this.lens = this.service.lens.find(x => x.id  == this.lensId);
   
  }
  
}
