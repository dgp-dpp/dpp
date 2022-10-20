import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker,GoogleMap } from '@angular/google-maps';
import { map } from 'rxjs';
import {  MapabienesService } from 'src/app/services/mapabienes.service';
import { SelectEvent, TabPosition } from '@progress/kendo-angular-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  public marcadores : any[] = [];
  public marcador:any;

  public position: TabPosition = "top";
  form: FormGroup;



  vertices: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: -13, lng: 0},
    {lat: 13, lng: -13},
  ];
public kmlUrl= "https://www.inegi.org.mx/kml/11.kml";
public kmlUrl2= "https://www.inegi.org.mx/kml/11.kml";
public kmlVialidades ="https://raw.githubusercontent.com/cabarronc/dpp/master/src/assets/pdf/VIALIDADES.kml";
public kmlTest = "https://raw.githubusercontent.com/cabarronc/dpp/master/src/assets/kml/westcampus.kml";
public iconMap  ={
  iconUrl: "https://raw.githubusercontent.com/cabarronc/dpp/master/src/assets/Icons/local_hospital_black_24dp.svg"
  // iconUrl:"https://github.com/cabarronc/dpp/blob/master/src/assets/Icons/building_hospital_medical_icon_226547.ico?raw=true"
}
public onTabSelect(e: SelectEvent): void {
  console.log(e);
}

GuardarMarcador() {
  const crece: any = {
  marcador_id: this.form.get('marcador_id')?.value
  }
}



public settings = {
  prevButtonIcon: "fa fa-arrow-circle-left",
  nextButtonIcon: "fa fa-arrow-circle-right",
};

public position2 = {
  lat: 20.644342843727173, lng:-100.99584701789902
}
markerClustererImagePath ='https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
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

  constructor(private mapabienesService: MapabienesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      marcador_id: ["", Validators.required]
    });
   }

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
        const {id,municipio, unidad, domicilio, cve_mun, lng, lat,pp,pg,icon} =_marcadores;
      //  console.log(_paises);
        return{
        municipio: municipio,
        unidad: unidad,
        domicilio: domicilio,
        cve_mun: cve_mun,
        position:{lat,lng},
        pp:pp,
        pg:pg,
        icon:icon,
        id:id
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
  public openInfo(marker: MapMarker) {
    this.info.open(marker)
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
