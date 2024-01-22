import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-dashboard',
  templateUrl: './display-dashboard.component.html',
  styleUrls: ['./display-dashboard.component.scss']
})
export class DisplayDashboardComponent implements OnInit {
  ngOnInit(): void {
    console.log('display loadedddd');
  }

}
