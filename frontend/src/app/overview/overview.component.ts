import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  products = [1,2,3,4,5,7,8,9,0,11,12,13,14,15,16,17,18,19,20];

  constructor() { }



  ngOnInit(): void {
  }

}
