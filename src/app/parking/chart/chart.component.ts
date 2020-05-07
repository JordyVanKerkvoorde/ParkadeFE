import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;
    
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

    //console.log(this._eds.getDataWrapper$(this.id));

    console.log("dataobject")
    //fetch data
    this._eds.getDataWrapper$(this.id).subscribe((data: DataWrapper) => {
      this.datawrapper = data;
      console.log(this.datawrapper);
    
      this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    //create new chart from given data
      this.chart = new Chart(this.context, {
        type: 'line',
        data:{
          labels: data.timedata,
          datasets: [
            //add dataset from entryservice
            { 
              data: data.capacitydata,
              borderColor: "#3cba9f",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              type: 'time',
              time: {
                displayFormats: {
                  minute: 'H:mm'
                }
              },
              distribution: 'series',
              //bounds: 'data'
            }],
            yAxes: [{
              display: true,
              ticks: {
                callback: function(value: number) {
                  if (value % 1 === 0) {
                    return value;
                  }
                }
              }
            }],
          }
        }
      });

    });
  }

}
