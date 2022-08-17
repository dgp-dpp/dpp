import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { map } from 'rxjs';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
public paises : any[] = [];

public iconMap  ={
  iconUrl:"https://flagcdn.com/ax.svg",
  iconHeigh:10
}
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
public position2 ={
  lat:23,
  lng:-2
}


  constructor(private paisesService: PaisesService) {

  }

  ngOnInit(): void {
   this.AddMarkers();


  }
   AddMarkers(){
  this.paisesService.getAll().pipe(
    map (response => response.$values)
  ).subscribe
  (_data => {
    _data = _data.map(_paises =>{
      const {nombrePais,lat,lng} =_paises;
    //  console.log(_paises);
      return{
      name: nombrePais,
      position:{lat,lng}
      }
    })
    console.log(_data);
    this.paises = _data;

    }, error => {
      console.log(error);
    })
  }
  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
}
}
