import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contributionchart',
  templateUrl: './contributionchart.component.html',
  styleUrls: ['./contributionchart.component.css']
})
export class ContributionchartComponent implements OnInit {
@Input('gitHubSearchResult') gitHubSearchResult:any;
  constructor() { }

  ngOnInit(): void {
  }

}
