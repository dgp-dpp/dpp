import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-formulario-pac',
  templateUrl: './formulario-pac.component.html',
  styleUrls: ['./formulario-pac.component.css']
})
export class FormularioPacComponent implements OnInit {

  public listCursos:  Array<{ value: number ;text: string}> = [];

  form: FormGroup;

  obtenerCursos() {
    this._cursosService.getListCursos().pipe(
      map(response =>response.$values)
    ).subscribe(_data => {
      _data = _data.map(_curso=>{
        const {idCurso, nombreCurso} = _curso;
        return {

          value: idCurso,
          text: nombreCurso
        }


      });
     this.listCursos = _data;
      console.log(_data);


    }, error => {
      console.log(error);
    })
  }

  constructor(private _cursosService: CursosService,
              private fb: FormBuilder,
              private toastr: ToastrService, ) {
    this.form = this.fb.group({
      Siglas:  new FormControl(this.data.Siglas, [Validators.required]),
      Nombre:  new FormControl(this.data.Nombre, [Validators.required]),
      Rfc:  new FormControl(this.data.Rfc, [Validators.required]),
      Email: new FormControl(this.data.Email , [Validators.required]),
      Puesto: new FormControl(this.data.Puesto, [Validators.required]),
      Ur: new FormControl(this.data.Ur, [Validators.required]),
      Curso: new FormControl(this.data.Curso, [Validators.required]),
      Bloque: new FormControl(this.data.Bloque, [Validators.required]),
      EmailAlterno: new FormControl(this.data.EmailAlterno, [Validators.required])

    });
  }

  ngOnInit(): void {
    this.obtenerCursos();
  }
  public data: any = {
    Siglas:"",
    Nombre: "",
    Rfc: "",
    Email: "",
    Puesto: "",
    Ur: "",
    Curso: "",
    Bloque:"",
    EmailAlterno:""
  };
  public listItems: Array<string> = [
    "CCL",
    "CEAG",
    "CEAIV",
    "CECAMED",
    "CECCEG",
    "CECYTEG",
    "CGCS",
    "CGJ",
    "CODE",
  ];


}
