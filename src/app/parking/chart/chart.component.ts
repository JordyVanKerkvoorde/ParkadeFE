import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Parking } from '../parking.model';
import { ActivatedRoute } from '@angular/router';
import { ParkingDataService } from '../parking-data.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart;
  //change to dataobject?
  parking: Parking;
  id: number;
  constructor(
    private _route: ActivatedRoute,
    //change to entrydataservice
    private _pds: ParkingDataService) { }
  ngOnInit() {
    this._route.paramMap.subscribe(params =>{
      this.id = parseInt(params.get('id'));
    });

    //change to entrydataservice
    this._pds.getParking$(this.id).subscribe((parking: Parking) =>{
      this.parking = parking
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
    });

    
  }

}
