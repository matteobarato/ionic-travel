import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  PolylineOptions,
  Polyline,
  Marker,
  ILatLng,
  Environment
} from '@ionic-native/google-maps';

const COLOR_LINES = '#42A5F5';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  map: GoogleMap;
  search_value:string = '';

  constructor(private plt:Platform) {
  }

  ngOnInit() {
    this.plt.ready().then(_=>{
      console.info('Platform ready!')
      this.loadMap();
    })
  }

  loadMap() {

    // This code is necessary for browser
    /*Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });*/

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Marrakesh',
      icon: '#2196F3',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  onChangeSearch(event){
    if (event && event.target){
      this.search_value = String(event.target.value)
    }    
  }

  drawLine(LatLngs:ILatLng[]){
    let options:PolylineOptions = {
      points: LatLngs,
      color: COLOR_LINES,
      width: 10,
      geodesic: true,
      clickable: true

    }
    this.map.addPolyline(options)
  }

}
