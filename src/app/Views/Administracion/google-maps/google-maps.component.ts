import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
title="google maps";
position={
  lat:21.012246716651134,
  lng:-101.27464855401944
};
label={
  color:'black',
  text:'marcador'
};
position2={
  lat:21.012982847405716,
  lng:-101.27447957491582

};

  constructor() { }

  ngOnInit(): void {
  }

}
