import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { map } from 'rxjs';
import {  MapabienesService } from 'src/app/services/mapabienes.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  public marcadores : any[] = [];
  vertices: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: -13, lng: 0},
    {lat: 13, lng: -13},
  ];
public kmlUrl= "https://www.inegi.org.mx/kml/11.kml";
public iconMap  ={
  iconUrl: "https://raw.githubusercontent.com/scottdejonge/map-icons/master/src/icons/doctor.svg"
  // iconUrl:"https://github.com/cabarronc/dpp/blob/master/src/assets/Icons/building_hospital_medical_icon_226547.ico?raw=true"
}
zoom = 7;
center: google.maps.LatLngLiteral = {lat: 21.021741979149716, lng: -101.25856695825684};
options: google.maps.MapOptions = {
  mapTypeId: 'hybrid',
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  maxZoom: 20,
  minZoom: 3,
}

  constructor(private mapabienesService: MapabienesService) { }

  ngOnInit(): void {
    this.Tuposicion();
    this.AddMarkers();
  }
  AddMarkers(){
    this.mapabienesService.getAll().pipe(
      map (response => response.$values)
    ).subscribe
    (_data => {
      _data = _data.map(_marcadores =>{
        const {municipio, unidad, domicilio, cve_mun, lng, lat} =_marcadores;
      //  console.log(_paises);
        return{
        municipio: municipio,
        unidad: unidad,
        domicilio: domicilio,
        cve_mun: cve_mun,
        position:{lat,lng}
        }
      })
      console.log(_data);
      this.marcadores= _data;

      }, error => {
        console.log(error);
      })
    }
    public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
      infoWindow.open(marker);
  }

  Tuposicion() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,

      }
      this.zoom=8;
    })
  }

}
