import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
paises : any[] = [];
zoom = 1;
center: google.maps.LatLngLiteral;
options: google.maps.MapOptions = {
  mapTypeId: 'hybrid',
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  maxZoom: 20,
  minZoom: 3,
}
position = {
  lat: 21.012246716651134,
  lng: -101.27464855401944
};

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.getAll().subscribe
    (_data => {
      this.paises = _data
       console.log(_data);

     }, error => {
       console.log(error);
     })

  }

}
