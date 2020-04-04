  
import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map;
  testp;
  vectorSource;
  vectorLayer;
  rasterLayer;
  constructor() { }

  ngOnInit(): void {
    this.testp = new Feature({
      geometry: new Point(fromLonLat([3.7219431, 51.054633]))
    });
    
    this.testp.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: '../',
        imgSize: [20, 20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.testp]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.map = new Map({
      target: 'map',
      layers: [ new TileLayer({
        source: new OSM()
      }), this.vectorLayer ],
      view: new View({
        center: fromLonLat([3.7219431, 51.054633]),
        zoom: 15,
      })
    });
  }

}
