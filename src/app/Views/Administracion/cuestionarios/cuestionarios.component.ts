import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {
   Nombre: string;
   Rol: string;
  constructor(private loginServices:LoginService) { }

  ngOnInit(): void {
    this.getUsuario();
  }
 getUsuario():void
 {
    this.Nombre = this.loginServices.getTokenDecoded().sub;
    this.Rol= this.loginServices.getTokenDecoded().roles;
    console.log(this.loginServices.getTokenDecoded());

 }
}
