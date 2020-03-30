import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import View from 'ol/View.js'
import {fromLonLat} from 'ol/proj.js'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any
  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([3.7219431, 51.054633]),
        zoom: 15,
      })
    });
  }

}
