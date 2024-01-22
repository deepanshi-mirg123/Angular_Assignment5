import { Component, OnInit, inject } from '@angular/core';
import {  LensService } from 'projects/route/src/app/services/lens.service';
import { Lens } from 'projects/route/src/app/models/lens';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.scss']
})
export class LensComponent implements OnInit{
  lensService = inject(LensService);
  AllLenses: Lens[];

searchString : string | undefined;
activeRoute: ActivatedRoute = inject(ActivatedRoute);
constructor(private router : Router){
  alert("Please wait Resolver is implemented here...");
  
}
  ngOnInit(): void {
    
      // this.searchString = this.activeRoute.snapshot.queryParams['search'];
      // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
      // this.activeRoute.queryParamMap.subscribe((data: { get: (arg0: string) => string; }) => {
        // this.searchString = data.get('search');
  
        if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
          this.lensService.getAlllenses().subscribe((data: Lens[]) => {
            this.AllLenses = data;
          });
  
          // this.AllLenses = this.activeRoute.snapshot.data['lens'];  
        }else{
          this.AllLenses = this.lensService.lens
            .filter(x => x.title.toLowerCase()
            // .includes(this.searchString.toLowerCase())
            );
            
        
        }
      }
}
  
      
    
  

