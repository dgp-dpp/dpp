import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

import { bloques } from 'src/app/models/data.bloques';
import { categories } from 'src/app/models/data.categories';
import { pp } from 'src/app/models/data.pp';
import { CatPpService } from 'src/app/services/cat-pp.service';
import { CursosService } from 'src/app/services/cursos.service';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crece-formualario',
  templateUrl: './crece-formualario.component.html',
  styleUrls: ['./crece-formualario.component.css']
})
export class CreceFormualarioComponent implements OnInit {
  form: FormGroup;
  public selectedValue = "";
  Nombre: string;
  Rol: string;
  public ProgramaPresupuestario: Array<{ value: number ;text: string}>= [];
  public fecha: Date = new Date(2000, 2, 10);


  public listCursos:  Array<{ value: number ;text: string}> = [];
  public listDep:  Array<{ text: string; value: number}> = [];

  getUsuario():void
  {
     this.Nombre = this.loginServices.getTokenDecoded().sub;
     this.Rol= this.loginServices.getTokenDecoded().roles;
     console.log(this.loginServices.getTokenDecoded());

  }

obtenerPp(){
  this._catPpService.getListPp().pipe(
    map(response=>response.$values)
  ).subscribe(
    _data=>{
      _data = _data.map(_pp=>{
        const {idPp,clavePp} = _pp;
        return{
          value:idPp,
          text: clavePp
        }

      }

      );
      this.ProgramaPresupuestario=_data;
      console.log(_data);

    },error => {
      console.log(error);
    }

  )
}


//Obtener Curso
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
//Obtener Dependencias
  obtenerDependencias() {
    this._depService.GetListDep().pipe(
      map(response =>response.$values)
     ).subscribe(_data =>{
       _data = _data.map(_dep=>{
        const {idDependencia, siglaDependencia} = _dep;
        return {
          text: siglaDependencia,
          value: idDependencia

        }
       }
        );
        this.listDep = _data;
        console.log(_data);
     },
     error => {
      console.log(error);
    } )
  }


  //Metodo para registrar las Inscripciones
  guardarInscripcion() {
    const inscripcion: any = {
      Email: this.form.get('Email')?.value,
      Revision: this.form.get('Revision')?.value,
      Pp: this.form.get('Pp')?.value,
      Dependencia: this.form.get('Dependencia')?.value,
      Fecha: this.form.get('Fecha')?.value,
      Ano: this.form.get('Ano')?.value,
      DepPar: this.form.get('DepPar')?.value,
      ClaveNombre: this.form.get('ClaveNombre')?.value,
      DepResPp: this.form.get('DepResPp')?.value,
      DepParPp: this.form.get('DepParPp')?.value,
      Intro: this.form.get('Intro')?.value,
      AnalisisInvolucrados: this.form.get('AnalisisInvolucrados')?.value,
      DefProblema: this.form.get('DefProblema')?.value,
      EvoProblema: this.form.get('EvoProblema')?.value,
      EstActualProblema: this.form.get('EstActualProblema')?.value,
      ExpAtencion: this.form.get('ExpAtencion')?.value,
      DefObjetivos:  this.form.get('DefObjetivos')?.value,
      AnalisisCorrespon:  this.form.get('AnalisisCorrespon')?.value,
      SelecAlterna: this.form.get('SelecAlterna')?.value,
      EstructuraAnalitica: this.form.get('EstructuraAnalitica')?.value,
      JustObj:this.form.get('JustObj')?.value,
      IdentificacionCuanPob: this.form.get('IdentificacionCuanPob')?.value,
      IdenficacionAreaInfluencia: this.form.get('IdenficacionAreaInfluencia')?.value,
      RelOtrosPP:  this.form.get('RelOtrosPP')?.value,
      ElementosPEB: this.form.get('ElementosPEB')?.value,
      MIR: this.form.get('MIR')?.value,
      EvoPp:this.form.get('EvoPp')?.value,
      Glosario:this.form.get('Glosario')?.value,


    }
    this._inscripcionService.saveInscripcion(inscripcion).subscribe(_data => {
      this.toastr.success('El Participante '+ inscripcion.Nombre +' fue registrado con exito!', 'Participante Registrado');
      this.form.reset();
    }, error => {
      this.toastr.error('Opss.. ocurrio un error','Error')
      console.log(error);
    })

  }

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _inscripcionService: InscripcionesService,
    private _cursosService: CursosService,
    private _depService: DependenciasService,
    private _catPpService: CatPpService,
    private loginServices:LoginService) {
    this.form = this.fb.group({
      Email:  [this.loginServices.getTokenDecoded().email, Validators.required],
      Revision:  ['Entrega 2023',Validators.required],
      Pp: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]] ,
      Dependencia: ['', Validators.required],
      Fecha:  ['', Validators.required],
      Ano:  ['', Validators.required],
      DepPar:  ['', Validators.required],
      ClaveNombre:['',Validators.required],
      DepResPp:['',Validators.required],
      DepParPp:['',Validators.required],
      FechaADx:['',Validators.required],
      Intro:['',Validators.required],
      AnalisisInvolucrados:['',Validators.required],
      DefProblema:['',Validators.required],
      EvoProblema:['',Validators.required],
      EstActualProblema:['',Validators.required],
      ExpAtencion:['',Validators.required],
      DefObjetivos:['',Validators.required],
      AnalisisCorrespon:['',Validators.required],
      SelecAlterna:['',Validators.required],
      EstructuraAnalitica: ['',Validators.required],
      JustObj: ['',Validators.required],
      IdentificacionCuanPob: ['',Validators.required],
      IdenficacionAreaInfluencia: ['',Validators.required],
      RelOtrosPP:['',Validators.required],
      ElementosPEB:['',Validators.required],
      MIR:['',Validators.required],
      EvoPp:['',Validators.required],
      Glosario:['',Validators.required],
    });
    console.log(pp);
   }

  ngOnInit(): void {
    this.obtenerCursos();
    this.obtenerDependencias();
    this.getUsuario();
    this.obtenerPp();
  }
  public listYear: Array<string> = [
    "2019",
    "2020",
    "2021",
    "2022",
    "2023"
  ];
  public listDepPar: Array<string> = [
    "Si",
    "Parcialmente",
    "No"
  ];
}
