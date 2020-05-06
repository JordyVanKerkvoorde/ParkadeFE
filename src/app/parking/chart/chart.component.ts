import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { EntryDataService } from '../entry-data.service';
import { DataWrapper } from '../datawrapper.model';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart;
  datawrapper: DataWrapper;
  id: number;
  constructor(
    private _route: ActivatedRoute,
    private _eds: EntryDataService) { }

  ngOnInit() {
    //read route parameter
    this._route.paramMap.subscribe(params =>{
      this.id = parseInt(params.get('id'));
    });

    console.log("dataobject")
    //fetch data
    this._eds.getDataWrapper$(this.id).subscribe((data: DataWrapper) => {
      this.datawrapper = data;
      console.log(this.datawrapper);
    })

    //create new chart from given data
      this.chart = new Chart('canvas', {
        type: 'line',
        data:{
          labels: [],
          datasets: [
            //add dataset from entryservice
            
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });

    
  }

}
