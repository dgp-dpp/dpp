import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectEvent, TabPosition } from '@progress/kendo-angular-layout';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

import { pp } from 'src/app/models/data.pp';
import { CatPpService } from 'src/app/services/cat-pp.service';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { LoginService } from 'src/app/services/login.service';
import { CrecePlaneacionService } from 'src/app/services/crece-planeacion.service'

@Component({
  selector: 'app-crece-formualario',
  templateUrl: './crece-formualario.component.html',
  styleUrls: ['./crece-formualario.component.css']
})
export class CreceFormualarioComponent implements OnInit {
  //   @ViewChild('myForm') form: FormGroup;

  // send() { this.form.ngSubmit.emit(); }
  //-------------------------DECELARACION DE TODAS LAS VARIABLES--------------------
  form: FormGroup;
  public selectedValue = "";
  Nombre: string;
  Rol: string;
  public ProgramaPresupuestario: Array<{ value: number; text: string }> = [];
  public fecha: Date = new Date(2000, 2, 10);
  public position: TabPosition = "top";
  // -------VARIABLES PARA CALCULO DE LA PRIMER PREGUNTA----------
  public Contador1si: any;
  public Contador2si: any;
  public Contador1no: any;
  public Contador2no: any;
  public TotalSi: number;

  public contador:number=0;

  public CalfDp1:number;

  public Dp4Calf: any;
  public CalfDp4: string = "";
  public PonDp4: number = 0;

  public Dp5Calf: any;
  public CalfDp5: string = "";
  public PonDp5: number = 0;

  public Dp6Calf: any;
  public CalfDp6: string = "";
  public PonDp6: number = 0;

  public Dp7Calf: any;
  public CalfDp7: string = "";
  public PonDp7: number = 0;

  public Dp8Calf: any;
  public CalfDp8: string = "";
  public PonDp8: number = 0;

  public Dp9Calf: any;
  public CalfDp9: string = "";
  public PonDp9: number = 0;

  public Dp10Calf: any;
  public CalfDp10: string = "";
  public PonDp10: number = 0;

  public Dp11Calf: any;
  public CalfDp11: string = "";
  public PonDp11: number = 0;

  public Dp12Calf: any;
  public CalfDp12: string = "";
  public PonDp12: number = 0;

  public Dp13Calf: any;
  public CalfDp13: string = "";
  public PonDp13: number = 0;

  public Dp14Calf: any;
  public CalfDp14: string = "";
  public PonDp14: number = 0;

  public Dp15Calf: any;
  public CalfDp15: string = "";
  public PonDp15: number = 0;

  public Dp16Calf: any;
  public CalfDp16: string = "";
  public PonDp16: number = 0;

  public Dp17Calf: any;
  public CalfDp17: string = "";
  public PonDp17: number = 0;

  public Dp18Calf: any;
  public CalfDp18: string = "";
  public PonDp18: number = 0;

  public Dp19Calf: any;
  public CalfDp19: string = "";
  public PonDp19: number = 0;

  public Dp20Calf: any;
  public CalfDp20: string = "";
  public PonDp20: number = 0;

  public Mir1Calf: any;
  public CalfMir1: string = "";
  public PonMir1: number = 0;

  public Mir2Calf: any;
  public CalfMir2: string = "";
  public PonMir2: number = 0;

  public Mir3Calf: any;
  public CalfMir3: string = "";
  public PonMir3: number = 0;

  public Mir4Calf: any;
  public CalfMir4: string = "";
  public PonMir4: number = 0;

  public Mir5Calf: any;
  public CalfMir5: string = "";
  public PonMir5: number = 0;

  public Mir6Calf: any;
  public CalfMir6: string = "";
  public PonMir6: number = 0;

  public Mir7Calf: any;
  public CalfMir7: string = "";
  public PonMir7: number = 0;

  public Mir8Calf: any;
  public CalfMir8: string = "";
  public PonMir8: number = 0;

  public Mir9Calf: any;
  public CalfMir9: string = "";
  public PonMir9: number = 0;

  public Mir10Calf: any;
  public CalfMir10: string = "";
  public PonMir10: number = 0;

  public Mir11Calf: any;
  public CalfMir11: string = "";
  public PonMir11: number = 0;

  public Mir12Calf: any;
  public CalfMir12: string = "";
  public PonMir12: number = 0;

  public Mir13Calf: any;
  public CalfMir13: string = "";
  public PonMir13: number = 0;

  public Mir14Calf: any;
  public CalfMir14: string = "";
  public PonMir14: number = 0;

  public Mir15Calf: any;
  public CalfMir15: string = "";
  public PonMir15: number = 0;

  public Mir16Calf: any;
  public CalfMir16: string = "";
  public PonMir16: number = 0;

  public Mir17Calf: any;
  public CalfMir17: string = "";
  public PonMir17: number = 0;

  public Mir18Calf: any;
  public CalfMir18: string = "";
  public PonMir18: number = 0;

  public Mir19Calf: any;
  public CalfMir19: string = "";
  public PonMir19: number = 0;

  public Mir20Calf: any;
  public CalfMir20: string = "";
  public PonMir20: number = 0;

  public Mir21Calf: any;
  public CalfMir21: string = "";
  public PonMir21: number = 0;

  public Mir22Calf: any;
  public CalfMir22: string = "";
  public PonMir22: number = 0;

  public Mir23Calf: any;
  public CalfMir23: string = "";
  public PonMir23: number = 0;

  public Mir24Calf: any;
  public CalfMir24: string = "";
  public PonMir24: number = 0;

  public Mir25Calf: any;
  public CalfMir25: string = "";
  public PonMir25: number = 0;

  public Mir26Calf: any;
  public CalfMir26: string = "";
  public PonMir26: number = 0;



  public textAreaValueDp4 = "";
  public textAreaValueDp5 = "";
  public textAreaValueDp6 = "";
  public textAreaValueDp7 = "";
  public textAreaValueDp8 = "";
  public textAreaValueDp9 = "";
  public textAreaValueDp10 = "";
  public textAreaValueDp11 = "";
  public textAreaValueDp12 = "";
  public textAreaValueDp13 = "";
  public textAreaValueDp14 = "";
  public textAreaValueDp15 = "";
  public textAreaValueDp16 = "";
  public textAreaValueDp17 = "";
  public textAreaValueDp18 = "";
  public textAreaValueDp19 = "";
  public textAreaValueDp20 = "";

  public textAreaValueMir1 = "";
  public textAreaValueMir2 = "";
  public textAreaValueMir3 = "";
  public textAreaValueMir4 = "";
  public textAreaValueMir5 = "";
  public textAreaValueMir6 = "";
  public textAreaValueMir7 = "";
  public textAreaValueMir8 = "";
  public textAreaValueMir9 = "";
  public textAreaValueMir10 = "";
  public textAreaValueMir11 = "";
  public textAreaValueMir12 = "";
  public textAreaValueMir13 = "";
  public textAreaValueMir14 = "";
  public textAreaValueMir15 = "";
  public textAreaValueMir16 = "";
  public textAreaValueMir17 = "";
  public textAreaValueMir18 = "";
  public textAreaValueMir19 = "";
  public textAreaValueMir20 = "";
  public textAreaValueMir21 = "";
  public textAreaValueMir22 = "";
  public textAreaValueMir23 = "";
  public textAreaValueMir24 = "";
  public textAreaValueMir25 = "";
  public textAreaValueMir26 = "";
  public textAreaValueFMIR = "";
  public textAreaValueFDP = "";
  public textAreaValueAODP = "";
  public textAreaValueAOMIR = "";

  public listCursos: Array<{ value: number; text: string }> = [];
  public listDep: Array<{ text: string; value: number }> = [];
 //--------------------OBTENER USUARIOS  PARA QUE APAREZACA EN EL MENSAJE DE BIENVENDA-----------
  getUsuario(): void {
    this.Nombre = this.loginServices.getTokenDecoded().sub;
    this.Rol = this.loginServices.getTokenDecoded().roles;
    console.log(this.loginServices.getTokenDecoded());

  }
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public settings = {
    prevButtonIcon: "fa fa-arrow-circle-left",
    nextButtonIcon: "fa fa-arrow-circle-right",
  };

  //  ---------------OBTENER PROGRAMAS PRESUPUESTARIOS---------------
  obtenerPp() {
    this._catPpService.getListPp().pipe(
      map(response => response.$values)
    ).subscribe(
      _data => {
        _data = _data.map(_pp => {
          const { idPp, clavePp } = _pp;
          return {
            value: idPp,
            text: clavePp
          }

        }

        );
        this.ProgramaPresupuestario = _data;
        console.log(_data);

      }, error => {
        console.log(error);
      }

    )
  }

  //---------------OBTENER DEPENDENCIAS--------------------
  obtenerDependencias() {
    this._depService.GetListDep().pipe(
      map(response => response.$values)
    ).subscribe(_data => {
      _data = _data.map(_dep => {
        const { idDependencia, siglaDependencia } = _dep;
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
      })
  }


  //-------------------------------------------------------------------------------------------------------------
  //-------------------------------------Metodo para registrar las Inscripciones---------------------------------
  //-------------------------------------------------------------------------------------------------------------
  GuardarCrece() {
    const crece: any = {
      Email: this.form.get('Email')?.value,
      Revision: this.form.get('Revision')?.value,
      Pp: this.form.get('Pp')?.value,
      Dependencia: this.form.get('Dependencia')?.value,
      Fecha: this.form.get('Fecha')?.value,
      Ano: this.form.get('Ano')?.value,
      DepPar: this.form.get('DepPar')?.value,
      //Elementos
      ClaveNombre: this.form.get('ClaveNombre')?.value,
      DepResPp: this.form.get('DepResPp')?.value,
      DepParPp: this.form.get('DepParPp')?.value,
      FechaADx: this.form.get('FechaADx')?.value,
      Intro: this.form.get('Intro')?.value,
      AnalisisInvolucrados: this.form.get('AnalisisInvolucrados')?.value,
      DefProblema: this.form.get('DefProblema')?.value,
      // AnalisisProblema: this.form.get('AnalisisProblema')?.value,
      EvoProblema: this.form.get('EvoProblema')?.value,
      EstActualProblema: this.form.get('EstActualProblema')?.value,
      ExpAtencion: this.form.get('ExpAtencion')?.value,
      DefObjetivos: this.form.get('DefObjetivos')?.value,
      AnalisisCorrespon: this.form.get('AnalisisCorrespon')?.value,
      SelecAlterna: this.form.get('SelecAlterna')?.value,
      EstructuraAnalitica: this.form.get('EstructuraAnalitica')?.value,
      JustObj: this.form.get('JustObj')?.value,
      IdentificacionCuanPob: this.form.get('IdentificacionCuanPob')?.value,
      IdenficacionAreaInfluencia: this.form.get('IdenficacionAreaInfluencia')?.value,
      RelOtrosPP: this.form.get('RelOtrosPP')?.value,
      ElementosPEB: this.form.get('ElementosPEB')?.value,
      MIR: this.form.get('MIR')?.value,
      EvoPp: this.form.get('EvoPp')?.value,
      Glosario: this.form.get('Glosario')?.value,

      //Evaluacion Dp
      Dp1: this.form.get('Dp1')?.value,
      Dp4: this.form.get('Dp4')?.value,// calificacion en los intervalos [0,3,9]
      Dp4Esp: this.form.get('Dp4Esp')?.value, // Respuesta Especifica de la pregunta
      CalfDp4form: this.form.get('CalfDp4form')?.value, //Respuesta Generica
      ponDp4form: this.form.get('ponDp4form')?.value,  // Ponderacion de la Pregunta [0{0},3{1},9{2}]
      Dp5: this.form.get('Dp5')?.value,
      Dp5Esp: this.form.get('Dp5Esp')?.value,
      Dp6: this.form.get('Dp6')?.value,
      Dp6Esp: this.form.get('Dp6Esp')?.value,
      Dp7: this.form.get('Dp7')?.value,
      Dp7Esp: this.form.get('Dp7Esp')?.value,
      Dp8: this.form.get('Dp8')?.value,
      Dp8Esp: this.form.get('Dp8Esp')?.value,
      Dp9: this.form.get('Dp9')?.value,
      Dp9Esp: this.form.get('Dp9Esp')?.value,
      Dp10: this.form.get('Dp10')?.value,
      Dp10Esp: this.form.get('Dp10Esp')?.value,
      Dp11: this.form.get('Dp11')?.value,
      Dp11Esp: this.form.get('Dp11Esp')?.value,
      Dp12: this.form.get('Dp12')?.value,
      Dp12Esp: this.form.get('Dp12Esp')?.value,
      Dp13: this.form.get('Dp13')?.value,
      Dp13Esp: this.form.get('Dp13Esp')?.value,
      Dp14: this.form.get('Dp14')?.value,
      Dp14Esp: this.form.get('Dp14Esp')?.value,
      Dp15: this.form.get('Dp15')?.value,
      Dp15Esp: this.form.get('Dp15Esp')?.value,
      Dp16: this.form.get('Dp16')?.value,
      Dp16Esp: this.form.get('Dp16Esp')?.value,
      Dp17: this.form.get('Dp17')?.value,
      Dp17Esp: this.form.get('Dp17Esp')?.value,
      Dp18: this.form.get('Dp18')?.value,
      Dp18Esp: this.form.get('Dp18Esp')?.value,
      Dp19: this.form.get('Dp19')?.value,
      Dp19Esp: this.form.get('Dp19Esp')?.value,
      Dp20: this.form.get('Dp20')?.value,
      Dp20Esp: this.form.get('Dp20Esp')?.value,
      //MIr
      Mir1: this.form.get('Mir1')?.value,
      Mir1Esp: this.form.get('Mir1Esp')?.value,
      Mir2: this.form.get('Mir2')?.value,
      Mir2Esp: this.form.get('Mir2Esp')?.value,
      Mir3: this.form.get('Mir3')?.value,
      Mir3Esp: this.form.get('Mir3Esp')?.value,
      Mir4: this.form.get('Mir4')?.value,
      Mir4Esp: this.form.get('Mir4Esp')?.value,
      Mir5: this.form.get('Mir5')?.value,
      Mir5Esp: this.form.get('Mir5Esp')?.value,
      Mir6: this.form.get('Mir6')?.value,
      Mir6Esp: this.form.get('Mir6Esp')?.value,
      Mir7: this.form.get('Mir7')?.value,
      Mir7Esp: this.form.get('Mir7Esp')?.value,
      Mir8: this.form.get('Mir8')?.value,
      Mir8Esp: this.form.get('Mir8Esp')?.value,
      Mir9: this.form.get('Mir9')?.value,
      Mir9Esp: this.form.get('Mir9Esp')?.value,
      Mir10: this.form.get('Mir10')?.value,
      Mir10Esp: this.form.get('Mir10Esp')?.value,
      Mir11: this.form.get('Mir11')?.value,
      Mir11Esp: this.form.get('Mir11Esp')?.value,
      Mir12: this.form.get('Mir12')?.value,
      Mir12Esp: this.form.get('Mir12Esp')?.value,
      Mir13: this.form.get('Mir13')?.value,
      Mir13Esp: this.form.get('Mir13Esp')?.value,
      Mir14: this.form.get('Mir14')?.value,
      Mir14Esp: this.form.get('Mir14Esp')?.value,
      Mir15: this.form.get('Mir15')?.value,
      Mir15Esp: this.form.get('Mir15Esp')?.value,
      Mir16: this.form.get('Mir16')?.value,
      Mir16Esp: this.form.get('Mir16Esp')?.value,
      Mir17: this.form.get('Mir17')?.value,
      Mir17Esp: this.form.get('Mir17Esp')?.value,
      Mir18: this.form.get('Mir18')?.value,
      Mir18Esp: this.form.get('Mir18Esp')?.value,
      Mir19: this.form.get('Mir19')?.value,
      Mir19Esp: this.form.get('Mir19Esp')?.value,
      Mir20: this.form.get('Mir20')?.value,
      Mir20Esp: this.form.get('Mir20Esp')?.value,
      Mir21: this.form.get('Mir21')?.value,
      Mir21Esp: this.form.get('Mir21Esp')?.value,
      Mir22: this.form.get('Mir22')?.value,
      Mir22Esp: this.form.get('Mir22Esp')?.value,
      Mir23: this.form.get('Mir23')?.value,
      Mir23Esp: this.form.get('Mir23Esp')?.value,
      Mir24: this.form.get('Mir24')?.value,
      Mir24Esp: this.form.get('Mir24Esp')?.value,
      Mir25: this.form.get('Mir25')?.value,
      Mir25Esp: this.form.get('Mir25Esp')?.value,
      Mir26: this.form.get('Mir26')?.value,
      Mir26Esp: this.form.get('Mir26Esp')?.value,
      //Fortalezas
      FMir: this.form.get('FMir')?.value,
      FDp: this.form.get('FDp')?.value,
      //Areas de Oportunidad
      AoMir: this.form.get('AoMir')?.value,
      AoDp: this.form.get('AoDp')?.value,


    }
    this.CrecePlaneacionService.saveCrece(crece).subscribe(_data => {
      this.toastr.success('El Crece del PP ' + crece.Pp + ' fue registrado con exito!', 'Crece Registrado');
      this.form.reset();
    }, error => {
      this.toastr.error('Opss.. ocurrio un error', 'Error')
      console.log(error);
    })
  }
  //-----------------------------------------------------------------------------------------
  //--------------------------CONSTRUCTOR DONDE SE ESTABLECE EL FORM-------------------------
  //-----------------------------------------------------------------------------------------

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _depService: DependenciasService,
    private CrecePlaneacionService: CrecePlaneacionService,
    private _catPpService: CatPpService,
    private loginServices: LoginService) {
    this.form = this.fb.group({
      Email: [this.loginServices.getTokenDecoded().email, Validators.required],
      Revision: ['Entrega 2023', Validators.required],
      Pp: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      Dependencia: ['', Validators.required],
      Fecha: ['', Validators.required],
      Ano: ['', Validators.required],
      DepPar: ['', Validators.required],
      ClaveNombre: ['', Validators.required],
      DepResPp: ['', Validators.required],
      DepParPp: ['', Validators.required],
      FechaADx: ['', Validators.required],
      Intro: ['', Validators.required],
      AnalisisInvolucrados: ['', Validators.required],
      DefProblema: ['', Validators.required],
      // AnalisisProblema:['',Validators.required],
      EvoProblema: ['', Validators.required],
      EstActualProblema: ['', Validators.required],
      ExpAtencion: ['', Validators.required],
      DefObjetivos: ['', Validators.required],
      AnalisisCorrespon: ['', Validators.required],
      SelecAlterna: ['', Validators.required],
      EstructuraAnalitica: ['', Validators.required],
      JustObj: ['', Validators.required],
      IdentificacionCuanPob: ['', Validators.required],
      IdenficacionAreaInfluencia: ['', Validators.required],
      RelOtrosPP: ['', Validators.required],
      ElementosPEB: ['', Validators.required],
      MIR: ['', Validators.required],
      EvoPp: ['', Validators.required],
      Glosario: ['', Validators.required],
      Dp1: ['', Validators.required],
      Dp4: ['', Validators.required],
      Dp4Esp: ['', Validators.required],
      Dp5: ['', Validators.required],
      Dp5Esp: ['', Validators.required],
      Dp6: ['', Validators.required],
      Dp6Esp: ['', Validators.required],
      Dp7: ['', Validators.required],
      Dp7Esp: ['', Validators.required],
      Dp8: ['', Validators.required],
      Dp8Esp: ['', Validators.required],
      Dp9: ['', Validators.required],
      Dp9Esp: ['', Validators.required],
      Dp10: ['', Validators.required],
      Dp10Esp: ['', Validators.required],
      Dp11: ['', Validators.required],
      Dp11Esp: ['', Validators.required],
      Dp12: ['', Validators.required],
      Dp12Esp: ['', Validators.required],
      Dp13: ['', Validators.required],
      Dp13Esp: ['', Validators.required],
      Dp14: ['', Validators.required],
      Dp14Esp: ['', Validators.required],
      Dp15: ['', Validators.required],
      Dp15Esp: ['', Validators.required],
      Dp16: ['', Validators.required],
      Dp16Esp: ['', Validators.required],
      Dp17: ['', Validators.required],
      Dp17Esp: ['', Validators.required],
      Dp18: ['', Validators.required],
      Dp18Esp: ['', Validators.required],
      Dp19: ['', Validators.required],
      Dp19Esp: ['', Validators.required],
      Dp20: ['', Validators.required],
      Dp20Esp: ['', Validators.required],
      Mir1: ['', Validators.required],
      Mir1Esp: ['', Validators.required],
      Mir2: ['', Validators.required],
      Mir2Esp: ['', Validators.required],
      Mir3: ['', Validators.required],
      Mir3Esp: ['', Validators.required],
      Mir4: ['', Validators.required],
      Mir4Esp: ['', Validators.required],
      Mir5: ['', Validators.required],
      Mir5Esp: ['', Validators.required],
      Mir6: ['', Validators.required],
      Mir6Esp: ['', Validators.required],
      Mir7: ['', Validators.required],
      Mir7Esp: ['', Validators.required],
      Mir8: ['', Validators.required],
      Mir8Esp: ['', Validators.required],
      Mir9: ['', Validators.required],
      Mir9Esp: ['', Validators.required],
      Mir10: ['', Validators.required],
      Mir10Esp: ['', Validators.required],
      Mir11: ['', Validators.required],
      Mir11Esp: ['', Validators.required],
      Mir12: ['', Validators.required],
      Mir12Esp: ['', Validators.required],
      Mir13: ['', Validators.required],
      Mir13Esp: ['', Validators.required],
      Mir14: ['', Validators.required],
      Mir14Esp: ['', Validators.required],
      Mir15: ['', Validators.required],
      Mir15Esp: ['', Validators.required],
      Mir16: ['', Validators.required],
      Mir16Esp: ['', Validators.required],
      Mir17: ['', Validators.required],
      Mir17Esp: ['', Validators.required],
      Mir18: ['', Validators.required],
      Mir18Esp: ['', Validators.required],
      Mir19: ['', Validators.required],
      Mir19Esp: ['', Validators.required],
      Mir20: ['', Validators.required],
      Mir20Esp: ['', Validators.required],
      Mir21: ['', Validators.required],
      Mir21Esp: ['', Validators.required],
      Mir22: ['', Validators.required],
      Mir22Esp: ['', Validators.required],
      Mir23: ['', Validators.required],
      Mir23Esp: ['', Validators.required],
      Mir24: ['', Validators.required],
      Mir24Esp: ['', Validators.required],
      Mir25: ['', Validators.required],
      Mir25Esp: ['', Validators.required],
      Mir26: ['', Validators.required],
      Mir26Esp: ['', Validators.required],
      FMir: ['', Validators.required],
      FDp: ['', Validators.required],
      AoMir: ['', Validators.required],
      AoDp: ['', Validators.required],
      CalfDp4form: ['', Validators.required],
      ponDp4form: ['', Validators.required],


    });
    console.log(pp);
  }

  ngOnInit(): void {
    this.obtenerDependencias();
    this.getUsuario();
    this.obtenerPp();
    this.respuestaGenericaDp4();
    this.ponderacionDp4();
    //this.Elemento2Calculo();

  }
  //------------------------------------------------------------------------
  //------------------METODOS PARA LIMPIAR LOS CAMPOS-----------------------
  //------------------------------------------------------------------------
  public clearValue4(): void {
    this.textAreaValueDp4 = "";
  }
  public clearValue5(): void {
    this.textAreaValueDp5 = "";
  }
  public clearValue6(): void {
    this.textAreaValueDp6 = "";
  }
  public clearValue7(): void {
    this.textAreaValueDp7 = "";
  }

  public clearValue8(): void {
    this.textAreaValueDp8 = "";
  }
  public clearValue9(): void {
    this.textAreaValueDp9 = "";
  }
  public clearValue10(): void {
    this.textAreaValueDp10 = "";
  }
  public clearValue11(): void {
    this.textAreaValueDp11 = "";
  }
  public clearValue12(): void {
    this.textAreaValueDp12 = "";
  }
  public clearValue13(): void {
    this.textAreaValueDp13 = "";
  }
  public clearValue14(): void {
    this.textAreaValueDp14 = "";
  }
  public clearValue15(): void {
    this.textAreaValueDp15 = "";
  }
  public clearValue16(): void {
    this.textAreaValueDp16 = "";
  }
  public clearValue17(): void {
    this.textAreaValueDp17 = "";
  }
  public clearValue18(): void {
    this.textAreaValueDp18 = "";
  }
  public clearValue19(): void {
    this.textAreaValueDp19 = "";
  }
  public clearValue20(): void {
    this.textAreaValueDp20 = "";
  }

  public clearValue21(): void {
    this.textAreaValueMir1 = "";
  }
  public clearValue22(): void {
    this.textAreaValueMir2 = "";
  }
  public clearValue23(): void {
    this.textAreaValueMir3 = "";
  }
  public clearValue24(): void {
    this.textAreaValueMir4 = "";
  }
  public clearValue25(): void {
    this.textAreaValueMir5 = "";
  }
  public clearValue26(): void {
    this.textAreaValueMir6 = "";
  }
  public clearValue27(): void {
    this.textAreaValueMir7 = "";
  }
  public clearValue28(): void {
    this.textAreaValueMir8 = "";
  }
  public clearValue29(): void {
    this.textAreaValueMir9 = "";
  }
  public clearValue30(): void {
    this.textAreaValueMir10 = "";
  }
  public clearValue31(): void {
    this.textAreaValueMir11 = "";
  }
  public clearValue32(): void {
    this.textAreaValueMir12 = "";
  }
  public clearValue33(): void {
    this.textAreaValueMir13 = "";
  }
  public clearValue34(): void {
    this.textAreaValueMir14 = "";
  }
  public clearValue35(): void {
    this.textAreaValueMir15 = "";
  }
  public clearValue36(): void {
    this.textAreaValueMir16 = "";
  }
  public clearValue37(): void {
    this.textAreaValueMir17 = "";
  }
  public clearValue38(): void {
    this.textAreaValueMir18 = "";
  }
  public clearValue39(): void {
    this.textAreaValueMir19 = "";
  }
  public clearValue40(): void {
    this.textAreaValueMir20 = "";
  }
  public clearValue41(): void {
    this.textAreaValueMir21 = "";
  }
  public clearValue42(): void {
    this.textAreaValueMir22 = "";
  }
  public clearValue43(): void {
    this.textAreaValueMir23 = "";
  }
  public clearValue44(): void {
    this.textAreaValueMir24 = "";
  }
  public clearValue45(): void {
    this.textAreaValueMir25 = "";
  }
  public clearValue46(): void {
    this.textAreaValueMir26 = "";
  }
  public clearValue47(): void {
    this.textAreaValueFMIR = "";
  }
  public clearValue48(): void {
    this.textAreaValueFDP = "";
  }
  public clearValue49(): void {
    this.textAreaValueAOMIR = "";
  }
  public clearValue50(): void {
    this.textAreaValueAODP = "";
  }

  // public Elemento1Calculo(): void {
  //   while(this.contador < 10)
  //   {
  //     this.contador += 1;
  //     if(this.contador== 5)
  //     {
  //       break;
  //     }
  //     console.log(this.contador + " ");
  //   }
  //   console.log("\n");
  // }

//---------------------------------------------------------------------------------------
//-------------------------CALCULO DE LA PRIMER PREGUNTA---------------------------------
//---------------------------------------------------------------------------------------
  public Elemento2Calculo():void{
    this.Contador1si = this.form.get('ClaveNombre')?.value
    this.Contador2si = this.form.get('DepResPp')?.value
    this.Contador1no = this.form.get('ClaveNombre')?.value
    this.Contador2no = this.form.get('DepResPp')?.value
    if (this.Contador1no === "0" && this.Contador2no === "0") {
      this.TotalSi = 0;
    } else if (this.Contador1si === "1" && this.Contador2no === "0") {
       this.TotalSi = 1;
    }
      else if (this.Contador1no === "0" && this.Contador2si === "1") {
        this.TotalSi = 1;
    } else if (this.Contador1si === "1" && this.Contador2si === "1") {
       this.TotalSi = 2;
    }
    console.log(this.form.value);
  }
  public TotDp1():void{

  }
//
//--------------------------------------------------------------------------------------------------------------------------------------
//METODOS PARA DETERMINAR  LOS CAMPOS DE SIN RECOMENDACIONES, RESPUESTA GENERICA Y PONDERACION EQUIVALENTE SEGUN SU  CALIFICACION (3,6,9)
//--------------------------------------------------------------------------------------------------------------------------------------
//
//******************************PREGUNTA 4******************************************
  public sinrec4(): void {
    if (this.Dp4Calf == 9) {
      this.textAreaValueDp4 = "Sin recomendaciones";
    }
    else if (this.Dp4Calf == 6) {
      this.textAreaValueDp4 = "";
    }
    else if (this.Dp4Calf == 3) {
      this.textAreaValueDp4 = "";
    }
  }
  public respuestaGenericaDp4(): any {
    if (this.Dp4Calf == 9) {
      this.CalfDp4 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp4Calf == 6) {
      this.CalfDp4 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp4Calf == 3) {
      this.CalfDp4 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp4(): void {
    if (this.Dp4Calf == 9) {
      //Maximo 2%
      this.PonDp4 = 2;
    } else if (this.Dp4Calf == 6) {
      this.PonDp4 = 1;
    }
    else if (this.Dp4Calf == 3) {
      this.PonDp4 = 0;
    }
  }
  //******************************PREGUNTA 5******************************************
  public sinrec5(): void {
    if (this.Dp5Calf == 9) {
      this.textAreaValueDp5 = "Sin recomendaciones";
    }
    else if (this.Dp5Calf == 6) {
      this.textAreaValueDp5 = "";
    }
    else if (this.Dp5Calf == 3) {
      this.textAreaValueDp5 = "";
    }
  }
  public respuestaGenericaDp5(): any {
    if (this.Dp5Calf == 9) {
      this.CalfDp5 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp5Calf == 6) {
      this.CalfDp5 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp5Calf == 3) {
      this.CalfDp5 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp5(): void {
    if (this.Dp5Calf == 9) {
      //Maximo 2%
      this.PonDp5 = 2;
    } else if (this.Dp5Calf == 6) {
      this.PonDp5 = 1;
    }
    else if (this.Dp5Calf == 3) {
      this.PonDp5 = 0;
    }
  }
  //******************************PREGUNTA 6******************************************
  public sinrec6(): void {
    if (this.Dp6Calf == 9) {
      this.textAreaValueDp6 = "Sin recomendaciones";
    }
    else if (this.Dp6Calf == 6) {
      this.textAreaValueDp6 = "";
    }
    else if (this.Dp6Calf == 3) {
      this.textAreaValueDp6 = "";
    }
  }
  public respuestaGenericaDp6(): any {
    if (this.Dp6Calf == 9) {
      this.CalfDp6 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp6Calf == 6) {
      this.CalfDp6 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp6Calf == 3) {
      this.CalfDp6 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp6(): void {
    if (this.Dp6Calf == 9) {
      //Maximo 2%
      this.PonDp6 = 2;
    } else if (this.Dp6Calf == 6) {
      this.PonDp6 = 1;
    }
    else if (this.Dp6Calf == 3) {
      this.PonDp6 = 0;
    }
  }
  //******************************PREGUNTA 7******************************************
  public sinrec7(): void {
    if (this.Dp7Calf == 9) {
      this.textAreaValueDp7 = "Sin recomendaciones";
    }
    else if (this.Dp7Calf == 6) {
      this.textAreaValueDp7 = "";
    }
    else if (this.Dp7Calf == 3) {
      this.textAreaValueDp7 = "";
    }
  }
  public respuestaGenericaDp7(): any {
    if (this.Dp7Calf == 9) {
      this.CalfDp7 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp7Calf == 6) {
      this.CalfDp7 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp7Calf == 3) {
      this.CalfDp7 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp7(): void {
    if (this.Dp7Calf == 9) {
      //Maximo 2%
      this.PonDp7 = 2;
    } else if (this.Dp7Calf == 6) {
      this.PonDp7 = 1;
    }
    else if (this.Dp7Calf == 3) {
      this.PonDp7 = 0;
    }
  }
  //******************************PREGUNTA 8******************************************
  public sinrec8(): void {
    if (this.Dp8Calf == 9) {
      this.textAreaValueDp8 = "Sin recomendaciones";
    }
    else if (this.Dp8Calf == 6) {
      this.textAreaValueDp8 = "";
    }
    else if (this.Dp8Calf == 3) {
      this.textAreaValueDp8 = "";
    }
  }
  public respuestaGenericaDp8(): any {
    if (this.Dp8Calf == 9) {
      this.CalfDp8 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp8Calf == 6) {
      this.CalfDp8 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp8Calf == 3) {
      this.CalfDp8 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp8(): void {
    if (this.Dp8Calf == 9) {
      //Maximo 2%
      this.PonDp8 = 2;
    } else if (this.Dp8Calf == 6) {
      this.PonDp8 = 1;
    }
    else if (this.Dp8Calf == 3) {
      this.PonDp8 = 0;
    }
  }
  //******************************PREGUNTA 9******************************************
  public sinrec9(): void {
    if (this.Dp9Calf == 9) {
      this.textAreaValueDp9 = "Sin recomendaciones";
    }
    else if (this.Dp9Calf == 6) {
      this.textAreaValueDp9 = "";
    }
    else if (this.Dp9Calf == 3) {
      this.textAreaValueDp9 = "";
    }
  }
  public respuestaGenericaDp9(): any {
    if (this.Dp9Calf == 9) {
      this.CalfDp9 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp9Calf == 6) {
      this.CalfDp9 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp9Calf == 3) {
      this.CalfDp9 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp9(): void {
    if (this.Dp9Calf == 9) {
      //Maximo 2%
      this.PonDp9 = 2;
    } else if (this.Dp9Calf == 6) {
      this.PonDp9 = 1;
    }
    else if (this.Dp9Calf == 3) {
      this.PonDp9 = 0;
    }
  }
  //******************************PREGUNTA 10******************************************
  public sinrec10(): void {
    if (this.Dp10Calf == 9) {
      this.textAreaValueDp10 = "Sin recomendaciones";
    }
    else if (this.Dp10Calf == 6) {
      this.textAreaValueDp10 = "";
    }
    else if (this.Dp10Calf == 3) {
      this.textAreaValueDp10 = "";
    }
  }
  public respuestaGenericaDp10(): any {
    if (this.Dp10Calf == 9) {
      this.CalfDp10 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp10Calf == 6) {
      this.CalfDp10 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp10Calf == 3) {
      this.CalfDp10 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp10(): void {
    if (this.Dp10Calf == 9) {
      //Maximo 2%
      this.PonDp10 = 2;
    } else if (this.Dp10Calf == 6) {
      this.PonDp10 = 1;
    }
    else if (this.Dp10Calf == 3) {
      this.PonDp10 = 0;
    }
  }
  //******************************PREGUNTA 11******************************************
  public sinrec11(): void {
    if (this.Dp11Calf == 9) {
      this.textAreaValueDp11 = "Sin recomendaciones";
    }
    else if (this.Dp11Calf == 6) {
      this.textAreaValueDp11 = "";
    }
    else if (this.Dp11Calf == 3) {
      this.textAreaValueDp11 = "";
    }
  }
  public respuestaGenericaDp11(): any {
    if (this.Dp11Calf == 9) {
      this.CalfDp11 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp11Calf == 6) {
      this.CalfDp11 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp11Calf == 3) {
      this.CalfDp11 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }

  public ponderacionDp11(): void {
    if (this.Dp11Calf == 9) {
      //Maximo 2%
      this.PonDp11 = 2;
    } else if (this.Dp11Calf == 6) {
      this.PonDp11 = 1;
    }
    else if (this.Dp11Calf == 3) {
      this.PonDp11 = 0;
    }
  }
  //******************************PREGUNTA 12******************************************
  public sinrec12(): void {
    if (this.Dp12Calf == 9) {
      this.textAreaValueDp12 = "Sin recomendaciones";
    }
    else if (this.Dp12Calf == 6) {
      this.textAreaValueDp12 = "";
    }
    else if (this.Dp12Calf == 3) {
      this.textAreaValueDp12 = "";
    }
  }
  public respuestaGenericaDp12(): any {
    if (this.Dp12Calf == 9) {
      this.CalfDp12 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
    } else if (this.Dp12Calf == 6) {
      this.CalfDp12 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    else if (this.Dp12Calf == 3) {
      this.CalfDp12 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
    }
    console.log(this.form.value);
  }


  public sinrec13(): void {
    this.textAreaValueDp13 = "Sin recomendaciones";
  }
  public sinrec14(): void {
    this.textAreaValueDp14 = "Sin recomendaciones";
  }
  public sinrec15(): void {
    this.textAreaValueDp15 = "Sin recomendaciones";
  }
  public sinrec16(): void {
    this.textAreaValueDp16 = "Sin recomendaciones";
  }
  public sinrec17(): void {
    this.textAreaValueDp17 = "Sin recomendaciones";
  }
  public sinrec18(): void {
    this.textAreaValueDp18 = "Sin recomendaciones";
  }
  public sinrec19(): void {
    this.textAreaValueDp19 = "Sin recomendaciones";
  }
  public sinrec20(): void {
    this.textAreaValueDp20 = "Sin recomendaciones";
  }
  public sinrec21(): void {
    this.textAreaValueMir1 = "Sin recomendaciones";
  }
  public sinrec22(): void {
    this.textAreaValueMir2 = "Sin recomendaciones";
  }
  public sinrec23(): void {
    this.textAreaValueMir3 = "Sin recomendaciones";
  }
  public sinrec24(): void {
    this.textAreaValueMir4 = "Sin recomendaciones";
  }
  public sinrec25(): void {
    this.textAreaValueMir5 = "Sin recomendaciones";
  }
  public sinrec26(): void {
    this.textAreaValueMir6 = "Sin recomendaciones";
  }
  public sinrec27(): void {
    this.textAreaValueMir7 = "Sin recomendaciones";
  }
  public sinrec28(): void {
    this.textAreaValueMir8 = "Sin recomendaciones";
  }
  public sinrec29(): void {
    this.textAreaValueMir9 = "Sin recomendaciones";
  }
  public sinrec30(): void {
    this.textAreaValueMir10 = "Sin recomendaciones";
  }
  public sinrec31(): void {
    this.textAreaValueMir11 = "Sin recomendaciones";
  }
  public sinrec32(): void {
    this.textAreaValueMir12 = "Sin recomendaciones";
  }
  public sinrec33(): void {
    this.textAreaValueMir13 = "Sin recomendaciones";
  }
  public sinrec34(): void {
    this.textAreaValueMir14 = "Sin recomendaciones";
  }
  public sinrec35(): void {
    this.textAreaValueMir15 = "Sin recomendaciones";
  }
  public sinrec36(): void {
    this.textAreaValueMir16 = "Sin recomendaciones";
  }
  public sinrec37(): void {
    this.textAreaValueMir17 = "Sin recomendaciones";
  }
  public sinrec38(): void {
    this.textAreaValueMir18 = "Sin recomendaciones";
  }
  public sinrec39(): void {
    this.textAreaValueMir19 = "Sin recomendaciones";
  }
  public sinrec40(): void {
    this.textAreaValueMir20 = "Sin recomendaciones";
  }
  public sinrec41(): void {
    this.textAreaValueMir21 = "Sin recomendaciones";
  }
  public sinrec42(): void {
    this.textAreaValueMir22 = "Sin recomendaciones";
  }
  public sinrec43(): void {
    this.textAreaValueMir23 = "Sin recomendaciones";
  }
  public sinrec44(): void {
    this.textAreaValueMir24 = "Sin recomendaciones";
  }
  public sinrec45(): void {
    this.textAreaValueMir25 = "Sin recomendaciones";
  }
  public sinrec46(): void {
    this.textAreaValueMir26 = "Sin recomendaciones";
  }
  //----------------------------------------------------------------------------------------------
  //--------------------------------CATALOGOS DE DROPLIST-----------------------------------------
  //----------------------------------------------------------------------------------------------
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
