import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
   @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow
  // @ViewChild(MapInfoWindow) info: MapInfoWindow;

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  click(event: google.maps.MouseEvent) {
    console.log(event)
  }
  title = "google maps";
  lat:number;
  lng:number;
  center: google.maps.LatLngLiteral;
  markers = [];
  markerPositions: google.maps.LatLngLiteral[] = [];
  infoContent = "<button>si esta es una prueba</button>";
  zoom = 12;
  position = {
    lat: 21.012246716651134,
    lng: -101.27464855401944
  };
  label = {
    color: 'black',
    text: 'marcador'
  };
  position2 = {
    lat: 21.012982847405716,
    lng: -101.27447957491582

  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  }

  constructor() { }

  ngOnInit(): void {
    this.Tuposicion();
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  Tuposicion() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,

      }
      this.zoom=17;
    })
  }
  addMarker2() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }
  public openInfo(marker: MapMarker) {
    this.info.open(marker)
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }


  openInfoWindow(marker: MapMarker) {
    // this.infoContent = content;
    this.info.open(marker)
  }


}
