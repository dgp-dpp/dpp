import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectEvent, TabPosition } from '@progress/kendo-angular-layout';
import { ToastrService } from 'ngx-toastr';
import { empty, map, Observable } from 'rxjs';

import { pp } from 'src/app/models/data.pp';
import { CatPpService } from 'src/app/services/cat-pp.service';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { LoginService } from 'src/app/services/login.service';
import { CrecePlaneacionService } from 'src/app/services/crece-planeacion.service'

import { BadgeAlign, BadgePosition, BadgeShape, BadgeThemeColor, BadgeSize } from "@progress/kendo-angular-indicators";
import { ElementSchemaRegistry } from '@angular/compiler';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { IntlService } from "@progress/kendo-angular-intl";
export interface JsonModel {
  value: string;
}
export interface Fecha {
  value: Date;
}



@Component({
  selector: 'app-crece-formualario',
  templateUrl: './crece-formualario.component.html',
  styleUrls: ['./crece-formualario.component.css']
})
export class CreceFormualarioComponent implements OnInit {
   filterPp = this.loginServices.getTokenDecoded().email;

  public fecha: Fecha;
  public model: JsonModel = JSON.parse('{"value": "2022-09-26" }');
  public output: string = JSON.stringify(this.model);
  id: number | undefined;

  accion = 'Elaborando';
  // public model: JsonModel = JSON.parse('{ "fecha": "2017-06-30" }');
  // public output: string = JSON.stringify(this.model);
  public checked1: boolean = false;
  public checked2: boolean = false;
  public checked3: boolean = false;
  public checked4: boolean = false;
  public checked5: boolean = false;
  public checked6: boolean = false;
  public checked7: boolean = false;
  public checked8: boolean = false;
  public checked9: boolean = false;
  public checked10: boolean = false;
  public checked11: boolean = false;
  public checked12: boolean = false;
  public checked13: boolean = false;
  public checked14: boolean = false;
  public checked15: boolean = false;
  public checked16: boolean = false;
  public checked17: boolean = false;
  public checked18: boolean = false;
  public checked19: boolean = false;
  public checked20: boolean = false;
  public checked21: boolean = false;
  public checked22: boolean = false;



  public Elements: string[] = [
    "element1",
    "element2",
    "element3",
    "element4",
  ];
  public elementos: boolean[] = [];
  public elementosTrue: boolean[] = [];
  public elementosFalse: boolean[] = [];
  public countElementsSi: number;
  public countElementsNo: number;

  public animation = true;





  public ElementSelected: string[] =
    [];
  public ElementsLen: number = this.ElementSelected.length;
  //   @ViewChild('myForm') form: FormGroup;

  // send() { this.form.ngSubmit.emit(); }
  //-------------------------DECELARACION DE TODAS LAS VARIABLES--------------------
  form: FormGroup;
  public selectedValue = "";
  Nombre: string;
  Rol: string;
  public ProgramaPresupuestario: Array<{ value: number; text: string }> = [];
  listCreces: any[] = [];
  public creces:Array<{id:number;
                      email:string;
                      revision:string;
                      pp:string;
                      dependencia:string;
                      fecha:any;
                      ano:number;
                      depPar:string;
                      claveNombre:boolean;
                      depResPp:boolean;
                      depParPp:boolean;
                      fechaADx:boolean;
                      intro:boolean;
                      analisisInvolucrados:boolean;
                      defProblema:boolean;
                      evoProblema:boolean;
                      estActualProblema:boolean;
                      expAtencion:boolean;
                      defObjetivos:boolean;
                      analisisCorrespon:boolean;
                      selecAlterna:boolean;
                      estructuraAnalitica:boolean;
                      justObj:boolean;
                      identificacionCuanPob:boolean;
                      identificacionAreaInfluencia:boolean;
                      relOtrosPP:boolean;
                      elementosPEB:boolean;
                      mir:boolean;
                      evoPp:boolean;
                      glosario:boolean;
                      dp1:number;
                      dp2:number;
                      dp3:number;
                      dp4:number;
                      dp4Esp:string;
                      calDp4form:string;
                      ponDp4form:number;
                      dp5:number;
                      dp5Esp:string;
                      calDp5form:string;
                      ponDp5form:number;
                      dp6:number;
                      dp6Esp:string;
                      calfDp6form:string;
                      ponDp6form:number;
                      dp7:number;
                      dp7Esp:string;
                      calfDp7form:string;
                      ponDp7form:number;
                      dp8:number;
                      dp8Esp:string;
                      calfDp8form:string;
                      ponDp8form:number;
                      dp9:number;
                      dp9Esp:string;
                      calfDp9form:string;
                      ponDp9form:number;
                      dp10:number;
                      dp10Esp:string;
                      calfDp10form:string;
                      ponDp10form:number;
                      dp11:number;
                      dp11Esp:string;
                      calfDp11form:string;
                      ponDp11form:number;
                      dp12:number;
                      dp12Esp:string;
                      calfDp12form:string;
                      ponDp12form:number;
                      dp13:number;
                      dp13Esp:string;
                      calfDp13form:string;
                      ponDp13form:number;
                      dp14:number;
                      dp14Esp:string;
                      calfDp14form:string;
                      ponDp14form:number;
                      dp15:number;
                      dp15Esp:string;
                      calfDp15form:string;
                      ponDp15form:number;
                      dp16:number;
                      dp16Esp:string;
                      calfDp16form:string;
                      ponDp16form:number;
                      dp17:number;
                      dp17Esp:string;
                      calfDp17form:string;
                      ponDp17form:number;
                      dp18:number;
                      dp18Esp:string;
                      calfDp18form:string;
                      ponDp18form:number;
                      dp19:number;
                      dp19Esp:string;
                      calfDp19form:string;
                      ponDp19form:number;
                      dp20:number;
                      dp20Esp:string;
                      calfDp20form:string;
                      ponDp20form:number;
                      mir1:number;
                      mir1Esp:string;
                      ponMir1form:number;
                      mir2:number;
                      mir2Esp:string;
                      ponMir2form:number;
                      mir3:number;
                      mir3Esp:string;
                      ponMir3form:number;
                      mir4:number;
                      mir4Esp:string;
                      ponMir4form:number;
                      mir5:number;
                      mir5Esp:string;
                      ponMir5form:number;
                      mir6:number;
                      mir6Esp:string;
                      ponMir6form:number;
                      mir7:number;
                      mir7Esp:string;
                      ponMir7form:number;
                      mir8:number;
                      mir8Esp:string;
                      ponMir8form:number;
                      mir9:number;
                      mir9Esp:string;
                      ponMir9form:number;
                      mir10:number;
                      mir10Esp:string;
                      ponMir10form:number;
                      mir11:number;
                      mir11Esp:string;
                      ponMir11form:number;
                      mir12:number;
                      mir12Esp:string;
                      ponMir12form:number;
                      mir13:number;
                      mir13Esp:string;
                      ponMir13form:number;
                      mir14:number;
                      mir14Esp:string;
                      ponMir14form:number;
                      mir15:number;
                      mir15Esp:string;
                      ponMir15form:number;
                      mir16:number;
                      mir16Esp:string;
                      ponMir16form:number;
                      mir17:number;
                      mir17Esp:string;
                      ponMir17form:number;
                      mir18:number;
                      mir18Esp:string;
                      ponMir18form:number;
                      mir19:number;
                      mir19Esp:string;
                      ponMir19form:number;
                      mir20:number;
                      mir20Esp:string;
                      ponMir20form:number;
                      mir21:number;
                      mir21Esp:string;
                      ponMir21form:number;
                      mir22:number;
                      mir22Esp:string;
                      ponMir22form:number;
                      mir23:number;
                      mir23Esp:string;
                      ponMir23form:number;
                      mir24:number;
                      mir24Esp:string;
                      ponMir24form:number;
                      mir25:number;
                      mir25Esp:string;
                      ponMir25form:number;
                      mir26:number;
                      mir26Esp:string;
                      ponMir26form:number;
                      fDp:string;
                      fMir:string;
                      aoDp:string;
                      aoMir:string;
                      calDp:number;
                      calMir:number;
                      CalTot:number;
                      }> = [ ]
  public value: Date;


  public format = "yyyy-MM-dd";
  public position: TabPosition = "top";
  public dep: string;
  public pp: string;
  //-------------------------DECELARACION DE VARIABLES PARA LA UI KENDO BADGE --------------------
  public shape: BadgeShape = "rounded";
  public ColorFin: BadgeThemeColor = "secondary";
  public Size: BadgeSize = "medium";
  public badgeAlign: BadgeAlign = { vertical: "bottom", horizontal: "end" };
  //-------------------------DECELARACION DE VARIABLES PARA LA UI KENDO GRID --------------------
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = null;
  public gridView: any[];
  public mySelection: string[] = [];



  // -------VARIABLES PARA CALCULO DE LA PRIMER PREGUNTA----------
  public Dp1Calf: number = 0;
  public year: number;
  public depModelo: string;
  public contador: number = 0;
  public CalfDp1: number;
  public TotalDp: number;
  public TotalMir: number;
  public CalProm: number;
  public PonDp2: number = 0;
  public PonDp3: number = 0;
  public CalGlob: number;
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
  public PonMir1: number = 0;

  public Mir2Calf: any;
  public PonMir2: number = 0;

  public Mir3Calf: any;
  public PonMir3: number = 0;

  public Mir4Calf: any;
  public PonMir4: number = 0;

  public Mir5Calf: any;
  public PonMir5: number = 0;

  public Mir6Calf: any;
  public PonMir6: number = 0;

  public Mir7Calf: any;
  public PonMir7: number = 0;

  public Mir8Calf: any;
  public PonMir8: number = 0;

  public Mir9Calf: any;
  public PonMir9: number = 0;

  public Mir10Calf: any;
  public PonMir10: number = 0;

  public Mir11Calf: any;
  public PonMir11: number = 0;

  public Mir12Calf: any;
  public PonMir12: number = 0;

  public Mir13Calf: any;
  public PonMir13: number = 0;

  public Mir14Calf: any;
  public PonMir14: number = 0;

  public Mir15Calf: any;
  public PonMir15: number = 0;

  public Mir16Calf: any;
  public PonMir16: number = 0;

  public Mir17Calf: any;
  public PonMir17: number = 0;

  public Mir18Calf: any;
  public PonMir18: number = 0;

  public Mir19Calf: any;
  public PonMir19: number = 0;

  public Mir20Calf: any;
  public PonMir20: number = 0;

  public Mir21Calf: any;
  public PonMir21: number = 0;

  public Mir22Calf: any;
  public PonMir22: number = 0;

  public Mir23Calf: any;
  public PonMir23: number = 0;

  public Mir24Calf: any;
  public PonMir24: number = 0;

  public Mir25Calf: any;
  public PonMir25: number = 0;

  public Mir26Calf: any;
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
  //-------------------------------------Metodo para Obetner  los CRECES---------------------------------
  //-------------------------------------------------------------------------------------------------------------

  // obtenerCreces2() {
  //   this.CrecePlaneacionService.getListCrece().subscribe(_data => {
  //    this.listCreces = _data.$values;
  //     console.log(_data.$values);


  //   }, error => {
  //     console.log(error);
  //   })
  // }
  obtenerCreces() {
    this.CrecePlaneacionService.getListCrece().pipe(
      map(response => response.$values)
    ).
    subscribe(_data => {
      _data = _data.map(_cres=>{
        const{id,
          email,
          revision,
          pp,
          dependencia,
          fecha,
          ano,
          depPar,
          claveNombre,
          depResPp,
          depParPp,
          fechaADx,
          intro,
          analisisInvolucrados,
          defProblema,
          evoProblema,
          estActualProblema,
          expAtencion,
          defObjetivos,
          analisisCorrespon,
          selecAlterna,
          estructuraAnalitica,
          justObj,
          identificacionCuanPob,
          idenficacionAreaInfluencia,
          relOtrosPP,
          elementosPEB,
          mir,
          evoPp,
          glosario,
          dp1,
          dp2,
          dp3,
          dp4,
          dp4Esp,
          calfDp4form,
          ponDp4form,
          dp5,
          dp5Esp,
          calfDp5form,
          ponDp5form,
          dp6,
          dp6Esp,
          calfDp6form,
          ponDp6form,
          dp7,
          dp7Esp,
          calfDp7form,
          ponDp7form,
          dp8,
          dp8Esp,
          calfDp8form,
          ponDp8form,
          dp9,
          dp9Esp,
          calfDp9form,
          ponDp9form,
          dp10,
          dp10Esp,
          calfDp10form,
          ponDp10form,
          dp11,
          dp11Esp,
          calfDp11form,
          ponDp11form,
          dp12,
          dp12Esp,
          calfDp12form,
          ponDp12form,
          dp13,
          dp13Esp,
          calfDp13form,
          ponDp13form,
          dp14,
          dp14Esp,
          calfDp14form,
          ponDp14form,
          dp15,
          dp15Esp,
          calfDp15form,
          ponDp15form,
          dp16,
          dp16Esp,
          calfDp16form,
          ponDp16form,
          dp17,
          dp17Esp,
          calfDp17form,
          ponDp17form,
          dp18,
          dp18Esp,
          calfDp18form,
          ponDp18form,
          dp19,
          dp19Esp,
          calfDp19form,
          ponDp19form,
          dp20,
          dp20Esp,
          calfDp20form,
          ponDp20form,
          mir1,
          mir1Esp,
          ponMir1form,
          mir2,
          mir2Esp,
          ponMir2form,
          mir3,
          mir3Esp,
          ponMir3form,
          mir4,
          mir4Esp,
          ponMir4form,
          mir5,
          mir5Esp,
          ponMir5form,
          mir6,
          mir6Esp,
          ponMir6form,
          mir7,
          mir7Esp,
          ponMir7form,
          mir8,
          mir8Esp,
          ponMir8form,
          mir9,
          mir9Esp,
          ponMir9form,
          mir10,
          mir10Esp,
          ponMir10form,
          mir11,
          mir11Esp,
          ponMir11form,
          mir12,
          mir12Esp,
          ponMir12form,
          mir13,
          mir13Esp,
          ponMir13form,
          mir14,
          mir14Esp,
          ponMir14form,
          mir15,
          mir15Esp,
          ponMir15form,
          mir16,
          mir16Esp,
          ponMir16form,
          mir17,
          mir17Esp,
          ponMir17form,
          mir18,
          mir18Esp,
          ponMir18form,
          mir19,
          mir19Esp,
          ponMir19form,
          mir20,
          mir20Esp,
          ponMir20form,
          mir21,
          mir21Esp,
          ponMir21form,
          mir22,
          mir22Esp,
          ponMir22form,
          mir23,
          mir23Esp,
          ponMir23form,
          mir24,
          mir24Esp,
          ponMir24form,
          mir25,
          mir25Esp,
          ponMir25form,
          mir26,
          mir26Esp,
          ponMir26form,
          fDp,
          fMir,
          aoDp,
          aoMir,
          calDp,
          calMir,
          calTot,
                 } =_cres;
          return{
            id:id,
            email: email,
            revision:revision,
            pp:pp,
            dependencia:dependencia,
            fecha:fecha,
            ano:ano,
            depPar:depPar,
            claveNombre:claveNombre,
            depResPp:depResPp,
            depParPp:depParPp,
            fechaADx:fechaADx,
            intro:intro,
            analisisInvolucrados:analisisInvolucrados,
            defProblema:defProblema,
            evoProblema:evoProblema,
            estActualProblema:estActualProblema,
            expAtencion:expAtencion,
            defObjetivos:defObjetivos,
            analisisCorrespon:analisisCorrespon,
            selecAlterna:selecAlterna,
            estructuraAnalitica:estructuraAnalitica,
            justObj:justObj,
            identificacionCuanPob:identificacionCuanPob,
            identificacionAreaInfluencia:idenficacionAreaInfluencia,
            relOtrosPP:relOtrosPP,
            elementosPEB:elementosPEB,
            mir:mir,
            evoPp:evoPp,
            glosario:glosario,
            dp1:dp1,
            dp2:dp2,
            dp3:dp3,
            dp4:dp4,
            dp4Esp:dp4Esp,
            calDp4form:calfDp4form,
            ponDp4form:ponDp4form,
            dp5:dp5,
            dp5Esp:dp5Esp,
            calDp5form:calfDp5form,
            ponDp5form:ponDp5form,
            dp6:dp6,
            dp6Esp:dp6Esp,
            calDp6form:calfDp6form,
            ponDp6form:ponDp6form,
            dp7:dp7,
            dp7Esp:dp7Esp,
            calDp7form:calfDp7form,
            ponDp7form:ponDp7form,
            dp8:dp8,
            dp8Esp:dp8Esp,
            calDp8form:calfDp8form,
            ponDp8form:ponDp8form,
            dp9:dp9,
            dp9Esp:dp9Esp,
            calDp9form:calfDp9form,
            ponDp9form:ponDp9form,
            dp10:dp10,
            dp10Esp:dp10Esp,
            calDp10form:calfDp10form,
            ponDp10form:ponDp10form,
            dp11:dp11,
            dp11Esp:dp11Esp,
            calDp11form:calfDp11form,
            ponDp11form:ponDp11form,
            dp12:dp12,
            dp12Esp:dp12Esp,
            calDp12form:calfDp12form,
            ponDp12form:ponDp12form,
            dp13:dp13,
            dp13Esp:dp13Esp,
            calDp13form:calfDp13form,
            ponDp13form:ponDp13form,
            dp14:dp14,
            dp14Esp:dp14Esp,
            calDp14form:calfDp14form,
            ponDp14form:ponDp14form,
            dp15:dp15,
            dp15Esp:dp15Esp,
            calDp15form:calfDp15form,
            ponDp15form:ponDp15form,
            dp16:dp16,
            dp16Esp:dp16Esp,
            calDp16form:calfDp16form,
            ponDp16form:ponDp16form,
            dp17:dp17,
            dp17Esp:dp17Esp,
            calDp17form:calfDp17form,
            ponDp17form:ponDp17form,
            dp18:dp18,
            dp18Esp:dp18Esp,
            calDp18form:calfDp18form,
            ponDp18form:ponDp18form,
            dp19:dp19,
            dp19Esp:dp19Esp,
            calDp19form:calfDp19form,
            ponDp19form:ponDp19form,
            dp20:dp20,
            dp20Esp:dp20Esp,
            calDp20form:calfDp20form,
            ponDp20form:ponDp20form,
            mir1:mir1,
            mir1Esp:mir1Esp,
            ponMir1form:ponMir1form,
            mir2:mir2,
            mir2Esp:mir2Esp,
            ponMir2form:ponMir2form,
            mir3:mir3,
            mir3Esp:mir3Esp,
            ponMir3form:ponMir3form,
            mir4:mir4,
            mir4Esp:mir4Esp,
            ponMir4form:ponMir4form,
            mir5:mir5,
            mir5Esp:mir5Esp,
            ponMir5form:ponMir5form,
            mir6:mir6,
            mir6Esp:mir6Esp,
            ponMir6form:ponMir6form,
            mir7:mir7,
            mir7Esp:mir7Esp,
            ponMir7form:ponMir7form,
            mir8:mir8,
            mir8Esp:mir8Esp,
            ponMir8form:ponMir8form,
            mir9:mir9,
            mir9Esp:mir9Esp,
            ponMir9form:ponMir9form,
            mir10:mir10,
            mir10Esp:mir10Esp,
            ponMir10form:ponMir10form,
            mir11:mir11,
            mir11Esp:mir11Esp,
            ponMir11form:ponMir11form,
            mir12:mir12,
            mir12Esp:mir12Esp,
            ponMir12form:ponMir11form,
            mir13:mir13,
            mir13Esp:mir13Esp,
            ponMir13form:ponMir13form,
            mir14:mir14,
            mir14Esp:mir14Esp,
            ponMir14form:ponMir14form,
            mir15:mir15,
            mir15Esp:mir15Esp,
            ponMir15form:ponMir15form,
            mir16:mir16,
            mir16Esp:mir16Esp,
            ponMir16form:ponMir16form,
            mir17:mir17,
            mir17Esp:mir17Esp,
            ponMir17form:ponMir17form,
            mir18:mir18,
            mir18Esp:mir18Esp,
            ponMir18form:ponMir18form,
            mir19:mir19,
            mir19Esp:mir19Esp,
            ponMir19form:ponMir19form,
            mir20:mir20,
            mir20Esp:mir20Esp,
            ponMir20form:ponMir20form,
            mir21:mir21,
            mir21Esp:mir21Esp,
            ponMir21form:ponMir21form,
            mir22:mir22,
            mir22Esp:mir22Esp,
            ponMir22form:ponMir22form,
            mir23:mir23,
            mir23Esp:mir23Esp,
            ponMir23form:ponMir23form,
            mir24:mir24,
            mir24Esp:mir24Esp,
            ponMir24form:ponMir24form,
            mir25:mir25,
            mir25Esp:mir25Esp,
            ponMir25form:ponMir25form,
            mir26:mir26,
            mir26Esp:mir26Esp,
            ponMir26form:ponMir26form,
            fDp:fDp,
            fMir:fMir,
            aoDp:aoDp,
            aoMir:aoMir,
            calDp:calDp,
            calMir:calMir,
            calTot:calTot,

          }
      });
     this.creces = _data;
      console.log(_data);
      console.log(this.creces);


    }, error => {
      console.log(error);
    })
  }



  //-------------------------------------------------------------------------------------------------------------
  //-------------------------------------Metodo para registrar los CRECES---------------------------------
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
      Dp2: this.form.get('Dp2')?.value,
      Dp3: this.form.get('Dp3')?.value,
      Dp4: this.form.get('Dp4')?.value,// calificacion en los intervalos [0,3,9]
      Dp4Esp: this.form.get('Dp4Esp')?.value, // Respuesta Especifica de la pregunta
      CalfDp4form: this.form.get('CalfDp4form')?.value, //Respuesta Generica
      ponDp4form: this.form.get('ponDp4form')?.value,  // Ponderacion de la Pregunta [0{0},3{1},9{2}]
      Dp5: this.form.get('Dp5')?.value,
      Dp5Esp: this.form.get('Dp5Esp')?.value,
      CalfDp5form: this.form.get('CalfDp5form')?.value,
      ponDp5form: this.form.get('ponDp5form')?.value,
      Dp6: this.form.get('Dp6')?.value,
      Dp6Esp: this.form.get('Dp6Esp')?.value,
      CalfDp6form: this.form.get('CalfDp6form')?.value,
      ponDp6form: this.form.get('ponDp6form')?.value,
      Dp7: this.form.get('Dp7')?.value,
      Dp7Esp: this.form.get('Dp7Esp')?.value,
      CalfDp7form: this.form.get('CalfDp7form')?.value,
      ponDp7form: this.form.get('ponDp7form')?.value,
      Dp8: this.form.get('Dp8')?.value,
      Dp8Esp: this.form.get('Dp8Esp')?.value,
      CalfDp8form: this.form.get('CalfDp8form')?.value,
      ponDp8form: this.form.get('ponDp8form')?.value,
      Dp9: this.form.get('Dp9')?.value,
      Dp9Esp: this.form.get('Dp9Esp')?.value,
      CalfDp9form: this.form.get('CalfDp9form')?.value,
      ponDp9form: this.form.get('ponDp9form')?.value,
      Dp10: this.form.get('Dp10')?.value,
      Dp10Esp: this.form.get('Dp10Esp')?.value,
      CalfDp10form: this.form.get('CalfDp10form')?.value,
      ponDp10form: this.form.get('ponDp10form')?.value,
      Dp11: this.form.get('Dp11')?.value,
      Dp11Esp: this.form.get('Dp11Esp')?.value,
      CalfDp11form: this.form.get('CalfDp11form')?.value,
      ponDp11form: this.form.get('ponDp11form')?.value,
      Dp12: this.form.get('Dp12')?.value,
      Dp12Esp: this.form.get('Dp12Esp')?.value,
      CalfDp12form: this.form.get('CalfDp12form')?.value,
      ponDp12form: this.form.get('ponDp12form')?.value,
      Dp13: this.form.get('Dp13')?.value,
      Dp13Esp: this.form.get('Dp13Esp')?.value,
      CalfDp13form: this.form.get('CalfDp13form')?.value,
      ponDp13form: this.form.get('ponDp13form')?.value,
      Dp14: this.form.get('Dp14')?.value,
      Dp14Esp: this.form.get('Dp14Esp')?.value,
      CalfDp14form: this.form.get('CalfDp14form')?.value,
      ponDp14form: this.form.get('ponDp14form')?.value,
      Dp15: this.form.get('Dp15')?.value,
      Dp15Esp: this.form.get('Dp15Esp')?.value,
      CalfDp15form: this.form.get('CalfDp15form')?.value,
      ponDp15form: this.form.get('ponDp15form')?.value,
      Dp16: this.form.get('Dp16')?.value,
      Dp16Esp: this.form.get('Dp16Esp')?.value,
      CalfDp16form: this.form.get('CalfDp16form')?.value,
      ponDp16form: this.form.get('ponDp16form')?.value,
      Dp17: this.form.get('Dp17')?.value,
      Dp17Esp: this.form.get('Dp17Esp')?.value,
      CalfDp17form: this.form.get('CalfDp17form')?.value,
      ponDp17form: this.form.get('ponDp17form')?.value,
      Dp18: this.form.get('Dp18')?.value,
      Dp18Esp: this.form.get('Dp18Esp')?.value,
      CalfDp18form: this.form.get('CalfDp18form')?.value,
      ponDp18form: this.form.get('ponDp18form')?.value,
      Dp19: this.form.get('Dp19')?.value,
      Dp19Esp: this.form.get('Dp19Esp')?.value,
      CalfDp19form: this.form.get('CalfDp19form')?.value,
      ponDp19form: this.form.get('ponDp19form')?.value,
      Dp20: this.form.get('Dp20')?.value,
      Dp20Esp: this.form.get('Dp20Esp')?.value,
      CalfDp20form: this.form.get('CalfDp20form')?.value,
      ponDp20form: this.form.get('ponDp20form')?.value,
      //MIR
      Mir1: this.form.get('Mir1')?.value,
      Mir1Esp: this.form.get('Mir1Esp')?.value,
      ponMir1form: this.form.get('ponMir1form')?.value,
      Mir2: this.form.get('Mir2')?.value,
      Mir2Esp: this.form.get('Mir2Esp')?.value,
      ponMir2form: this.form.get('ponMir2form')?.value,
      Mir3: this.form.get('Mir3')?.value,
      Mir3Esp: this.form.get('Mir3Esp')?.value,
      ponMir3form: this.form.get('ponMir3form')?.value,
      Mir4: this.form.get('Mir4')?.value,
      Mir4Esp: this.form.get('Mir4Esp')?.value,
      ponMir4form: this.form.get('ponMir4form')?.value,
      Mir5: this.form.get('Mir5')?.value,
      Mir5Esp: this.form.get('Mir5Esp')?.value,
      ponMir5form: this.form.get('ponMir5form')?.value,
      Mir6: this.form.get('Mir6')?.value,
      Mir6Esp: this.form.get('Mir6Esp')?.value,
      ponMir6form: this.form.get('ponMir6form')?.value,
      Mir7: this.form.get('Mir7')?.value,
      Mir7Esp: this.form.get('Mir7Esp')?.value,
      ponMir7form: this.form.get('ponMir7form')?.value,
      Mir8: this.form.get('Mir8')?.value,
      Mir8Esp: this.form.get('Mir8Esp')?.value,
      ponMir8form: this.form.get('ponMir8form')?.value,
      Mir9: this.form.get('Mir9')?.value,
      Mir9Esp: this.form.get('Mir9Esp')?.value,
      ponMir9form: this.form.get('ponMir9form')?.value,
      Mir10: this.form.get('Mir10')?.value,
      Mir10Esp: this.form.get('Mir10Esp')?.value,
      ponMir10form: this.form.get('ponMir10form')?.value,
      Mir11: this.form.get('Mir11')?.value,
      Mir11Esp: this.form.get('Mir11Esp')?.value,
      ponMir11form: this.form.get('ponMir11form')?.value,
      Mir12: this.form.get('Mir12')?.value,
      Mir12Esp: this.form.get('Mir12Esp')?.value,
      ponMir12form: this.form.get('ponMir12form')?.value,
      Mir13: this.form.get('Mir13')?.value,
      Mir13Esp: this.form.get('Mir13Esp')?.value,
      ponMir13form: this.form.get('ponMir13form')?.value,
      Mir14: this.form.get('Mir14')?.value,
      Mir14Esp: this.form.get('Mir14Esp')?.value,
      ponMir14form: this.form.get('ponMir14form')?.value,
      Mir15: this.form.get('Mir15')?.value,
      Mir15Esp: this.form.get('Mir15Esp')?.value,
      ponMir15form: this.form.get('ponMir15form')?.value,
      Mir16: this.form.get('Mir16')?.value,
      Mir16Esp: this.form.get('Mir16Esp')?.value,
      ponMir16form: this.form.get('ponMir16form')?.value,
      Mir17: this.form.get('Mir17')?.value,
      Mir17Esp: this.form.get('Mir17Esp')?.value,
      ponMir17form: this.form.get('ponMir17form')?.value,
      Mir18: this.form.get('Mir18')?.value,
      Mir18Esp: this.form.get('Mir18Esp')?.value,
      ponMir18form: this.form.get('ponMir18form')?.value,
      Mir19: this.form.get('Mir19')?.value,
      Mir19Esp: this.form.get('Mir19Esp')?.value,
      ponMir19form: this.form.get('ponMir19form')?.value,
      Mir20: this.form.get('Mir20')?.value,
      Mir20Esp: this.form.get('Mir20Esp')?.value,
      ponMir20form: this.form.get('ponMir20form')?.value,
      Mir21: this.form.get('Mir21')?.value,
      Mir21Esp: this.form.get('Mir21Esp')?.value,
      ponMir21form: this.form.get('ponMir21form')?.value,
      Mir22: this.form.get('Mir22')?.value,
      Mir22Esp: this.form.get('Mir22Esp')?.value,
      ponMir22form: this.form.get('ponMir22form')?.value,
      Mir23: this.form.get('Mir23')?.value,
      Mir23Esp: this.form.get('Mir23Esp')?.value,
      ponMir23form: this.form.get('ponMir23form')?.value,
      Mir24: this.form.get('Mir24')?.value,
      Mir24Esp: this.form.get('Mir24Esp')?.value,
      ponMir24form: this.form.get('ponMir24form')?.value,
      Mir25: this.form.get('Mir25')?.value,
      Mir25Esp: this.form.get('Mir25Esp')?.value,
      ponMir25form: this.form.get('ponMir25form')?.value,
      Mir26: this.form.get('Mir26')?.value,
      Mir26Esp: this.form.get('Mir26Esp')?.value,
      ponMir26form: this.form.get('ponMir26form')?.value,
      //Fortalezas
      FMir: this.form.get('FMir')?.value,
      FDp: this.form.get('FDp')?.value,
      //Areas de Oportunidad
      AoMir: this.form.get('AoMir')?.value,
      AoDp: this.form.get('AoDp')?.value,
      //Totales
      CalDp: this.TotalDp,
      CalMir: this.TotalMir,
      CalTot: this.CalProm,


    }
    if (this.id == undefined) {
// Agregamos una nuevo crece
      this.CrecePlaneacionService.saveCrece(crece).subscribe(_data => {
        this.toastr.success('El Crece del PP ' + crece.Pp + ' fue registrado con exito!', 'Crece Registrado');
        this.obtenerCreces();
        console.log(this.form.value);
        if (this.form.valid) {
          this.form.value;

          console.log("Form Submitted!");
          this.form.reset();
        }

      }, error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error')
        console.log(error);
        console.log(this.form.value);
      })
    }
    else{
      crece.id = this.id
// Editamos usuario
      this.CrecePlaneacionService.updateCrece(this.id,crece).subscribe(_data => {
        this.form.reset();
        this.accion = 'Elaborando';
        this.id = undefined;
        this.toastr.info('El usuario fue actualizada con exito!', 'Crece  Actualizado');
        this.obtenerCreces();
      }, error => {
        console.log(error);
      })

    }
  }
//-----------------------------------------------------------------------------------------
  //-------------------------ELIMINAR CRECE-------------------------------------------------
  //-----------------------------------------------------------------------------------------

  eliminarCrece(id: number) {
    this.CrecePlaneacionService.deleteCrece(id).subscribe(_data => {
      this.toastr.error('El crece fue eliminado con exito!','Usuario eliminado');
      this.obtenerCreces();
    }, error => {
      console.log(error);
    })

  }
//-----------------------------------------------------------------------------------------
  //--------------------------EDITAR UN CRECE ---------------------------------------------
  //-----------------------------------------------------------------------------------------
  editarCrece(crece: any) {
    this.accion = 'Actualizando';
    this.id = crece.id;

    this.form.patchValue({
      Email: crece.email,
      Revision: crece.revision,
      Pp: crece.pp,
      Dependencia: crece.dependencia,
      Fecha: crece.fecha,
      Ano: crece.ano,
      DepPar: crece.depPar,
      // Elementos
      ClaveNombre: crece.clavenombre,
      DepResPp: crece.depResPp,
      DepParPp: crece.depParPp,
      FechaADx: crece.fechaADx,
      Intro: crece.intro,
      AnalisisInvolucrados: crece.analisisInvolucrados,
      DefProblema: crece.defProblema,
      // AnalisisProblema:['',Validators.required],
      EvoProblema: crece.evoProblema,
      EstActualProblema: crece.estActualProblema,
      ExpAtencion: crece.expAtencion,
      DefObjetivos: crece.defObjetivos,
      AnalisisCorrespon: crece.analisisCorrespon,
      SelecAlterna: crece.selecAlterna,
      EstructuraAnalitica: crece.estructuraAnalitica,
      JustObj: crece.justObj,
      IdentificacionCuanPob: crece.identificacionCuanPob,
      IdenficacionAreaInfluencia: crece.idenficacionAreaInfluencia,
      RelOtrosPP: crece.relOtrosPP,
      ElementosPEB: crece.elementosPEB,
      MIR: crece.mir,
      EvoPp: crece.evoPp,
      Glosario: crece.glosario,
      Dp1: crece.dp1,
      Dp2: crece.dp2,
      Dp3: crece.dp3,
      Dp4: crece.dp4,
      Dp4Esp: crece.dp4Esp,
      CalfDp4form: crece.calfDp4form,
      ponDp4form: crece.ponDp4form,
      Dp5: crece.dp5,
      Dp5Esp: crece.dp5Esp,
      CalfDp5form: crece.calfDp5form,
      ponDp5form: crece.ponDp5form,
      Dp6: crece.dp6,
      Dp6Esp: crece.dp6Esp,
      CalfDp6form: crece.calfDp6form,
      ponDp6form: crece.ponDp6form,
      Dp7: crece.dp7,
      Dp7Esp: crece.dp7Esp,
      CalfDp7form: crece.calfDp7form,
      ponDp7form: crece.ponDp7form,
      Dp8: crece.dp8,
      Dp8Esp: crece.dp8Esp,
      CalfDp8form: crece.calfDp8form,
      ponDp8form: crece.ponDp8form,
      Dp9: crece.dp9,
      Dp9Esp: crece.dp9Esp,
      CalfDp9form: crece.calfDp9form,
      ponDp9form: crece.ponDp9form,
      Dp10: crece.dp10,
      Dp10Esp: crece.dp10Esp,
      CalfDp10form: crece.calfDp10form,
      ponDp10form: crece.ponDp10form,
      Dp11: crece.dp11,
      Dp11Esp: crece.dp11Esp,
      CalfDp11form: crece.calfDp11form,
      ponDp11form: crece.ponDp11form,
      Dp12: crece.dp12,
      Dp12Esp: crece.dp12Esp,
      CalfDp12form: crece.calfDp12form,
      ponDp12form: crece.ponDp12form,
      Dp13: crece.dp13,
      Dp13Esp: crece.dp13Esp,
      CalfDp13form: crece.calfDp13form,
      ponDp13form: crece.ponDp13form,
      Dp14: crece.dp14,
      Dp14Esp: crece.dp14Esp,
      CalfDp14form: crece.calfDp14form,
      ponDp14form: crece.ponDp14form,
      Dp15: crece.dp15,
      Dp15Esp: crece.dp15Esp,
      CalfDp15form: crece.calfDp15form,
      ponDp15form: crece.ponDp15form,
      Dp16: crece.dp16,
      Dp16Esp: crece.dp16Esp,
      CalfDp16form: crece.calfDp16form,
      ponDp16form: crece.ponDp16form,
      Dp17: crece.dp17,
      Dp17Esp: crece.dp17Esp,
      CalfDp17form: crece.calfDp17form,
      ponDp17form: crece.ponDp17form,
      Dp18: crece.dp18,
      Dp18Esp: crece.dp18Esp,
      CalfDp18form: crece.calfDp18form,
      ponDp18form: crece.ponDp18form,
      Dp19: crece.dp19,
      Dp19Esp: crece.dp19Esp,
      CalfDp19form: crece.calfDp19form,
      ponDp19form: crece.ponDp19form,
      Dp20: crece.dp20,
      Dp20Esp: crece.dp20Esp,
      CalfDp20form: crece.calfDp20form,
      ponDp20form: crece.ponDp20form,
      Mir1: crece.mir1,
      Mir1Esp: crece.mir1Esp,
      ponMir1form: crece.ponMir1form,
      Mir2: crece.mir2,
      Mir2Esp: crece.mir2Esp ,
      ponMir2form: crece.ponMir2form,
      Mir3:crece.mir3 ,
      Mir3Esp: crece.mir3Esp ,
      ponMir3form: crece.ponMir3form,
      Mir4:crece.mir4 ,
      Mir4Esp: crece.mir4Esp ,
      ponMir4form: crece.ponMir4form,
      Mir5:crece.mir5 ,
      Mir5Esp: crece.mir5Esp ,
      ponMir5form: crece.ponMir5form,
      Mir6:crece.mir6,
      Mir6Esp: crece.mir6Esp,
      ponMir6form: crece.ponMir6form,
      Mir7:crece.mir7,
      Mir7Esp: crece.mir7Esp,
      ponMir7form: crece.ponMir7form,
      Mir8:crece.mir8,
      Mir8Esp: crece.mir8Esp ,
      ponMir8form: crece.ponMir8form,
      Mir9:crece.mir9 ,
      Mir9Esp: crece.mir9Esp ,
      ponMir9form: crece.ponMir9form,
      Mir10:crece.mir10,
      Mir10Esp: crece.mir10Esp,
      ponMir10form: crece.ponMir10form,
      Mir11:crece.mir11,
      Mir11Esp: crece.mir11Esp ,
      ponMir11form: crece.ponMir11form,
      Mir12:crece.mir12,
      Mir12Esp: crece.mir12Esp ,
      ponMir12form: crece.ponMir12form,
      Mir13:crece.mir13 ,
      Mir13Esp: crece.mir13Esp ,
      ponMir13form: crece.ponMir13form,
      Mir14:crece.mir14,
      Mir14Esp: crece.mir14Esp ,
      ponMir14form: crece.ponMir14form,
      Mir15:crece.mir15 ,
      Mir15Esp: crece.mir15Esp ,
      ponMir15form: crece.ponMir15form,
      Mir16:crece.mir16 ,
      Mir16Esp: crece.mir16Esp ,
      ponMir16form: crece.ponMir16form,
      Mir17:crece.mir17,
      Mir17Esp: crece.mir17Esp ,
      ponMir17form: crece.ponMir17form,
      Mir18:crece.mir18,
      Mir18Esp: crece.mir18Esp ,
      ponMir18form: crece.ponMir18form,
      Mir19:crece.mir19 ,
      Mir19Esp: crece.mir19Esp ,
      ponMir19form: crece.ponMir19form,
      Mir20:crece.mir20 ,
      Mir20Esp: crece.mir20Esp ,
      ponMir20form: crece.ponMir20form,
      Mir21:crece.mir3,
      Mir21Esp: crece.mir3Esp ,
      ponMir21form: crece.ponMir21form,
      Mir22:crece.mir22,
      Mir22Esp: crece.mir22Esp ,
      ponMir22form: crece.ponMir22form,
      Mir23:crece.mir23 ,
      Mir23Esp: crece.mir23Esp ,
      ponMir23form: crece.ponMir23form,
      Mir24:crece.mir24 ,
      Mir24Esp: crece.mir24Esp ,
      ponMir24form: crece.ponMir24form,
      Mir25:crece.mir25 ,
      Mir25Esp: crece.mir25Esp,
      ponMir25form: crece.ponMir25form,
      Mir26:crece.mir26 ,
      Mir26Esp: crece.mir26Esp ,
      ponMir26form: crece.ponMir26form,
      FMir: crece.fMir,
      FDp: crece.fDp,
      AoMir: crece.aoMir,
      AoDp: crece.aoDp,

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
    private loginServices: LoginService,
    private intl: IntlService,
    ) {
    this.form = this.fb.group({
      Email: [this.loginServices.getTokenDecoded().email, Validators.required],
      Revision: ['Entrega 2023', Validators.required],
      Pp: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      Dependencia: ['', Validators.required],
      Fecha: ['', Validators.required],
      Ano: ['', Validators.required],
      DepPar: ['', Validators.required],
      // Elementos
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
      Dp2: ['', Validators.required],
      Dp3: ['', Validators.required],
      Dp4: ['', Validators.required],
      Dp4Esp: ['', Validators.required],
      CalfDp4form: ['', Validators.required],
      ponDp4form: ['', Validators.required],
      Dp5: ['', Validators.required],
      Dp5Esp: ['', Validators.required],
      CalfDp5form: ['', Validators.required],
      ponDp5form: ['', Validators.required],
      Dp6: ['', Validators.required],
      Dp6Esp: ['', Validators.required],
      CalfDp6form: ['', Validators.required],
      ponDp6form: ['', Validators.required],
      Dp7: ['', Validators.required],
      Dp7Esp: ['', Validators.required],
      CalfDp7form: ['', Validators.required],
      ponDp7form: ['', Validators.required],
      Dp8: ['', Validators.required],
      Dp8Esp: ['', Validators.required],
      CalfDp8form: ['', Validators.required],
      ponDp8form: ['', Validators.required],
      Dp9: ['', Validators.required],
      Dp9Esp: ['', Validators.required],
      CalfDp9form: ['', Validators.required],
      ponDp9form: ['', Validators.required],
      Dp10: ['', Validators.required],
      Dp10Esp: ['', Validators.required],
      CalfDp10form: ['', Validators.required],
      ponDp10form: ['', Validators.required],
      Dp11: ['', Validators.required],
      Dp11Esp: ['', Validators.required],
      CalfDp11form: ['', Validators.required],
      ponDp11form: ['', Validators.required],
      Dp12: ['', Validators.required],
      Dp12Esp: ['', Validators.required],
      CalfDp12form: ['', Validators.required],
      ponDp12form: ['', Validators.required],
      Dp13: ['', Validators.required],
      Dp13Esp: ['', Validators.required],
      CalfDp13form: ['', Validators.required],
      ponDp13form: ['', Validators.required],
      Dp14: ['', Validators.required],
      Dp14Esp: ['', Validators.required],
      CalfDp14form: ['', Validators.required],
      ponDp14form: ['', Validators.required],
      Dp15: ['', Validators.required],
      Dp15Esp: ['', Validators.required],
      CalfDp15form: ['', Validators.required],
      ponDp15form: ['', Validators.required],
      Dp16: ['', Validators.required],
      Dp16Esp: ['', Validators.required],
      CalfDp16form: ['', Validators.required],
      ponDp16form: ['', Validators.required],
      Dp17: ['', Validators.required],
      Dp17Esp: ['', Validators.required],
      CalfDp17form: ['', Validators.required],
      ponDp17form: ['', Validators.required],
      Dp18: ['', Validators.required],
      Dp18Esp: ['', Validators.required],
      CalfDp18form: ['', Validators.required],
      ponDp18form: ['', Validators.required],
      Dp19: ['', Validators.required],
      Dp19Esp: ['', Validators.required],
      CalfDp19form: ['', Validators.required],
      ponDp19form: ['', Validators.required],
      Dp20: ['', Validators.required],
      Dp20Esp: ['', Validators.required],
      CalfDp20form: ['', Validators.required],
      ponDp20form: ['', Validators.required],
      Mir1: ['', Validators.required],
      Mir1Esp: ['', Validators.required],
      ponMir1form: ['', Validators.required],
      Mir2: ['', Validators.required],
      Mir2Esp: ['', Validators.required],
      ponMir2form: ['', Validators.required],
      Mir3: ['', Validators.required],
      Mir3Esp: ['', Validators.required],
      ponMir3form: ['', Validators.required],
      Mir4: ['', Validators.required],
      Mir4Esp: ['', Validators.required],
      ponMir4form: ['', Validators.required],
      Mir5: ['', Validators.required],
      Mir5Esp: ['', Validators.required],
      ponMir5form: ['', Validators.required],
      Mir6: ['', Validators.required],
      Mir6Esp: ['', Validators.required],
      ponMir6form: ['', Validators.required],
      Mir7: ['', Validators.required],
      Mir7Esp: ['', Validators.required],
      ponMir7form: ['', Validators.required],
      Mir8: ['', Validators.required],
      Mir8Esp: ['', Validators.required],
      ponMir8form: ['', Validators.required],
      Mir9: ['', Validators.required],
      Mir9Esp: ['', Validators.required],
      ponMir9form: ['', Validators.required],
      Mir10: ['', Validators.required],
      Mir10Esp: ['', Validators.required],
      ponMir10form: ['', Validators.required],
      Mir11: ['', Validators.required],
      Mir11Esp: ['', Validators.required],
      ponMir11form: ['', Validators.required],
      Mir12: ['', Validators.required],
      Mir12Esp: ['', Validators.required],
      ponMir12form: ['', Validators.required],
      Mir13: ['', Validators.required],
      Mir13Esp: ['', Validators.required],
      ponMir13form: ['', Validators.required],
      Mir14: ['', Validators.required],
      Mir14Esp: ['', Validators.required],
      ponMir14form: ['', Validators.required],
      Mir15: ['', Validators.required],
      Mir15Esp: ['', Validators.required],
      ponMir15form: ['', Validators.required],
      Mir16: ['', Validators.required],
      Mir16Esp: ['', Validators.required],
      ponMir16form: ['', Validators.required],
      Mir17: ['', Validators.required],
      Mir17Esp: ['', Validators.required],
      ponMir17form: ['', Validators.required],
      Mir18: ['', Validators.required],
      Mir18Esp: ['', Validators.required],
      ponMir18form: ['', Validators.required],
      Mir19: ['', Validators.required],
      Mir19Esp: ['', Validators.required],
      ponMir19form: ['', Validators.required],
      Mir20: ['', Validators.required],
      Mir20Esp: ['', Validators.required],
      ponMir20form: ['', Validators.required],
      Mir21: ['', Validators.required],
      Mir21Esp: ['', Validators.required],
      ponMir21form: ['', Validators.required],
      Mir22: ['', Validators.required],
      Mir22Esp: ['', Validators.required],
      ponMir22form: ['', Validators.required],
      Mir23: ['', Validators.required],
      Mir23Esp: ['', Validators.required],
      ponMir23form: ['', Validators.required],
      Mir24: ['', Validators.required],
      Mir24Esp: ['', Validators.required],
      ponMir24form: ['', Validators.required],
      Mir25: ['', Validators.required],
      Mir25Esp: ['', Validators.required],
      ponMir25form: ['', Validators.required],
      Mir26: ['', Validators.required],
      Mir26Esp: ['', Validators.required],
      ponMir26form: ['', Validators.required],
      FMir: ['', Validators.required],
      FDp: ['', Validators.required],
      AoMir: ['', Validators.required],
      AoDp: ['', Validators.required],



    });
    console.log(pp);



  }

  ngOnInit(): void {

    this.obtenerDependencias();
    this.getUsuario();
    this.obtenerPp();
    this.MethodTotalDp();
    this.MethodTotalMir();
    this.MethodTotalCal();
    this.CalculoDp();
    this.RespuestaDp2();
    this.RespuestaDp3();
    this.RespuestaDp4();
    this.RespuestaDp4();
    this.creces;
    this.fecha = this.parse(this.model);

    // this.respuestaGenericaDp4();
    // this.ponderacionDp4();
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
  //------------------------------KENDO UI GAUGE -----------------------------------------
  public colors = [
    {
      to: 25,
      color: "#8396B8",
    },
    {
      from: 25,
      to: 50,
      color: "#F69006",
    },
    {
      from: 50,
      to: 75,
      color: "#FAFA02",
    },
    {
      from: 75,
      color: "#02FA27",
    },
  ];
  //---------------------------------------------------------------------------------------
  //-------------------------CALCULO DE LA PRIMER PREGUNTA---------------------------------
  //---------------------------------------------------------------------------------------
  public CalculoDp(): void {
    this.elementos = [
      this.checked1,
      this.checked2,
      this.checked3,
      this.checked4,
      this.checked5,
      this.checked6,
      this.checked7,
      this.checked8,
      this.checked9,
      this.checked10,
      this.checked11,
      this.checked12,
      this.checked13,
      this.checked14,
      this.checked15,
      this.checked16,
      this.checked17,
      this.checked18,
      this.checked19,
      this.checked20,
      this.checked21,
      this.checked22
    ];
    this.elementosTrue = this.elementos.filter(element => element == true)
    this.elementosFalse = this.elementos.filter(element => element == false)
    //var length = this.elementos.length;
    // for (var i = 0; i < this.elementos.length; i++) {
    //   this.elementos[i];
    // }
    this.countElementsSi = this.elementosTrue.length;
    if (this.countElementsSi == 0) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 1) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 2) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 3) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 4) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 5) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 6) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 7) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 8) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 9) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 10) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 11) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 12) {
      this.Dp1Calf = 0
    }
    else if (this.countElementsSi == 13) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 14) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 15) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 16) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 17) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 18) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 19) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 20) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 21) {
      this.Dp1Calf = 2
    }
    else if (this.countElementsSi == 22) {
      this.Dp1Calf = 4
    }
    else if (this.countElementsSi == undefined) {
      this.Dp1Calf = null;
    }
    console.log(this.elementos);
    console.log(this.elementosTrue);
    console.log(this.checked1);
    console.log(this.checked2);
    console.log(this.checked3);
    console.log(this.countElementsSi);
  }

  //
  //--------------------------------------------------------------------------------------------------------------------------------------
  //METODOS PARA DETERMINAR LA SUMA DE LAS PONDERACIONES
  //--------------------------------------------------------------------------------------------------------------------------------------
  //
  public MethodTotalCal(): any {
    this.CalGlob = this.TotalDp + this.TotalMir;
    this.CalProm = this.CalGlob / 2;
  }

  public progressStyles: { [key: string]: string } = {
    color: "",
    background: ""
  };
  public MethodTotalDp(): any {
    this.TotalDp = this.Dp1Calf + this.PonDp2 + this.PonDp3 + this.PonDp4 + this.PonDp5 + this.PonDp6 + this.PonDp7 + this.PonDp8 + this.PonDp9 + this.PonDp10 + this.PonDp11 + this.PonDp12 + this.PonDp13 + this.PonDp14 + this.PonDp15 + this.PonDp16 + this.PonDp17 + this.PonDp18 + this.PonDp19 + this.PonDp20;
    this.CalGlob = this.TotalDp + this.TotalMir;
    this.CalProm = this.CalGlob / 2;
    switch (this.TotalDp) {
      case 50: this.updateAppearance("#f50707");
        break;
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 70: this.updateAppearance("#ee9f05");
        break;
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80: this.updateAppearance("#1C4822");
        break;
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      default:


    }

  }
  private updateAppearance(
    background: string
  ): void {
    this.progressStyles['background'] = background

  }
  //------------------------------------TOTAL MIR ----------------------------------------
  public progressStylestwo: { [key: string]: string } = {
    color: "",
    background: ""
  };

  public MethodTotalMir(): any {
    this.TotalMir = this.PonMir1 + this.PonMir2 + this.PonMir3 + this.PonMir4 + this.PonMir5 + this.PonMir6 + this.PonMir7 + this.PonMir8 + this.PonMir9 + this.PonMir10 + this.PonMir11 + this.PonMir12 + this.PonMir13 + this.PonMir14 + this.PonMir15 + this.PonMir16 + this.PonMir17 + this.PonMir18 + this.PonMir19 + this.PonMir20 + this.PonMir21 + this.PonMir22 + this.PonMir23 + this.PonMir24 + this.PonMir25 + this.PonMir26;
    this.CalGlob = this.TotalDp + this.TotalMir;
    this.CalProm = this.CalGlob / 2;
    switch (this.TotalMir) {
      case 50: this.updateAppearancetwo("#f50707");
        break;
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 70: this.updateAppearancetwo("#ee9f05");
        break;
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80: this.updateAppearancetwo("#1C4822");
        break;
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      default:


    }

  }

  private updateAppearancetwo(
    background: string
  ): void {
    this.progressStylestwo['background'] = background

  }

  //
  //--------------------------------------------------------------------------------------------------------------------------------------
  //METODOS PARA DETERMINAR  LOS CAMPOS DE SIN RECOMENDACIONES, RESPUESTA GENERICA Y PONDERACION EQUIVALENTE SEGUN SU  CALIFICACION (3,6,9)
  //--------------------------------------------------------------------------------------------------------------------------------------
  //

  // public sinrec4(): void {
  //   if (this.Dp4Calf == 9) {
  //     this.textAreaValueDp4 = "Sin recomendaciones";
  //   }
  //   else if (this.Dp4Calf == 6) {
  //     this.textAreaValueDp4 = "";
  //   }
  //   else if (this.Dp4Calf == 3) {
  //     this.textAreaValueDp4 = "";
  //   }
  // }
  // public respuestaGenericaDp4(): any {
  //   if (this.Dp4Calf == 9) {
  //     this.CalfDp4 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
  //   } else if (this.Dp4Calf == 6) {
  //     this.CalfDp4 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
  //   }
  //   else if (this.Dp4Calf == 3) {
  //     this.CalfDp4 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
  //   }
  //   console.log(this.form.value);
  // }

  // public ponderacionDp4(): void {
  //   if (this.Dp4Calf == 9) {
  //     //Maximo 2%
  //     this.PonDp4 = 2;
  //   } else if (this.Dp4Calf == 6) {
  //     this.PonDp4 = 1;
  //   }
  //   else if (this.Dp4Calf == 3) {
  //     this.PonDp4 = 0;
  //   }
  // }
  //******************************PREGUNTA 1******************************************
  public RespuestaDp2(): void {
    if (this.year == 2021 || this.year == 2022) {
      this.PonDp2 = 4;
    }
    else if (this.year == 2019) {
      this.PonDp2 = 2;
    }
    else if (this.year == undefined) {
      this.PonDp2 = null;
    }
    // else{
    //   this.PonDp2 = 0;
    // }
  }
  public RespuestaDp3(): void {
    if (this.depModelo == "Si") {
      this.PonDp3 = 2;
    }
    else if (this.depModelo == "Parcialmente") {
      this.PonDp3 = 1;
    }
    else if (this.depModelo == "No") {
      this.PonDp3 = 0;
    }
    else if (this.depModelo == undefined) {
      this.PonDp3 = null;
    }

  }
  //******************************PREGUNTA 4******************************************
  public RespuestaDp4(): void {
    if (this.Dp4Calf == 9) {
      this.textAreaValueDp4 = "Sin recomendaciones";
      this.CalfDp4 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
      this.PonDp4 = 2;
    }
    else if (this.Dp4Calf == 6) {
      this.textAreaValueDp4 = "";
      this.CalfDp4 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo."
        + "\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
      this.PonDp4 = 1;
    }
    else if (this.Dp4Calf == 3) {
      this.textAreaValueDp4 = "";
      this.CalfDp4 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa."
        + "\nEste apartado comprende un resumen ejecutivo del resto del documento."
        + "\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
      this.PonDp4 = 0;
    }
  }
  //******************************PREGUNTA 5******************************************
  public RespuestaDp5(): void {
    if (this.Dp5Calf == 9) {
      this.textAreaValueDp5 = "Sin recomendaciones";
      this.CalfDp5 = "Se considera que se identifican los involucrados en la problemática.";
      this.PonDp5 = 10;
    }
    else if (this.Dp5Calf == 6) {
      this.textAreaValueDp5 = "";
      this.CalfDp5 = "Se considera que no se identifican todos los involucrados relacionados con la problemática, por lo que es necesario ampliar el análisis. "
        + "\nEste punto es muy relevante para el éxito del Programa presupuestario, ya que los involucrados pueden afectar los resultados del mismo."
        + "\nDada su importancia, esta recomendación será incluida en el plan de mejora continua del Programa.";
      this.PonDp5 = 5;
    }
    else if (this.Dp5Calf == 3) {
      this.textAreaValueDp5 = "";
      this.CalfDp5 = "Se considera que no se identifican los involucrados relacionados con la problemática, por lo que es necesario realizar el análisis."
        + "\nEste punto es muy relevante para el éxito del Programa presupuestario, ya que los involucrados pueden afectar los resultados del mismo."
        + "\nDada su importancia, esta recomendación será incluida en el plan de mejora continua del Programa.";
      this.PonDp5 = 0;
    }
  }
  //******************************PREGUNTA 6******************************************
  public RespuestaDp6(): void {
    if (this.Dp6Calf == 9) {
      this.textAreaValueDp6 = "Sin recomendaciones";
      this.CalfDp6 = "En lo que respecta a la problemática presentada, el problema o situación inicial se expresa de manera clara.";
      this.PonDp6 = 10;
    }
    else if (this.Dp6Calf == 6) {
      this.textAreaValueDp6 = "";
      this.CalfDp6 = "No Aplica";
      this.PonDp6 = 5;
    }
    else if (this.Dp6Calf == 3) {
      this.textAreaValueDp6 = "";
      this.CalfDp6 = "En lo que respecta a la problemática, el problema no se expresa claramente, por lo que es necesario replantearlo."
        + "\nEs importante considerar que para la definición del problema se requiere de la participación de todos los involucrados."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, siendo su atención urgente, ya que es la base para el resto del diagnóstico.";
      this.PonDp6 = 0;
    }
  }
  //******************************PREGUNTA 7******************************************
  public RespuestaDp7(): void {
    if (this.Dp7Calf == 9) {
      this.textAreaValueDp7 = "Sin recomendaciones";
      this.CalfDp7 = "Las causas de la problemática se presentan de manera lógica, y se encuentran sustentadas en información cualitativa y/o cuantitativa.";
      this.PonDp7 = 10;
    }
    else if (this.Dp7Calf == 6) {
      this.textAreaValueDp7 = "";
      this.CalfDp7 = "Las causas de la problemática se encuentran parcialmente documentadas, es necesario estructurar la información de manera lógica, así cómo ampliar la información cualitativa y cuantitativa que permita establecer una relación clara con el problema."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, considerando su atención como urgente, ya que las causas impactan en la definición de los objetivos de la intervención.";
      this.PonDp7 = 5;
    }
    else if (this.Dp7Calf == 3) {
      this.textAreaValueDp7 = "";
      this.CalfDp7 = "Las causas de la problemática no se encuentran documentadas, es necesario incluir la información cualitativa y cuantitativa que sustente las causas del problema."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, considerando su atención como urgente, ya que las causas impactan en la definición de los objetivos de la intervención.";
      this.PonDp7 = 0;
    }
  }
  //******************************PREGUNTA 8******************************************
  public RespuestaDp8(): void {
    if (this.Dp8Calf == 9) {
      this.textAreaValueDp8 = "Sin recomendaciones";
      this.CalfDp8 = "El árbol de problemas presentado es claro, sin embargo es necesario revisar las causas considerando la participación de todos los involucrados.";
      this.PonDp8 = 8;
    }
    else if (this.Dp8Calf == 6) {
      this.textAreaValueDp8 = "";
      this.CalfDp8 = "Se identifica que existen causas o efectos que no corresponden con el problema, por lo que es necesario verificar que las causas sean efectivamente el origen del problema y que los efectos resultan de éste. "
        + "\nEs importante considerar que para la elaboración del árbol de problemas se requiere de la participación de todos los involucrados."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, considerando su atención como urgente, ya que las causas y efectos impactan en la definición de los objetivos de la intervención.";
      this.PonDp8 = 4;
    }
    else if (this.Dp8Calf == 3) {
      this.textAreaValueDp8 = "";
      this.CalfDp8 = "Se identifica que las causas o efectos no corresponden con la problemática, por lo que es necesario verificar que las causas sean efectivamente el origen del problema y que los efectos resultan de éste."
        + "\nEs importante considerar que para la elaboración del árbol de problemas se requiere de la participación de todos los involucrados. "
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, considerando su atención como urgente, ya que las causas y efectos impactan en la definición de los objetivos de la intervención.";
      this.PonDp8 = 0;
    }
  }
  //******************************PREGUNTA 9******************************************
  public RespuestaDp9(): void {
    if (this.Dp9Calf == 9) {
      this.textAreaValueDp9 = "Sin recomendaciones";
      this.CalfDp9 = "El Diagnóstico Particular incluye información histórica que permite visualizar cómo ha cambiado la problemática a lo largo del tiempo.";
      this.PonDp9 = 4;
    }
    else if (this.Dp9Calf == 6) {
      this.textAreaValueDp9 = "";
      this.CalfDp9 = "El Diagnóstico Particular incluye información histórica parcial sobre el cambio de la problemática a lo largo del tiempo, por lo que es necesario ampliar el análisis y su documentación."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, ya que es importante conocer la tendencia de la problemática, su atención se considera relevante.";
      this.PonDp9 = 2;
    }
    else if (this.Dp9Calf == 3) {
      this.textAreaValueDp9 = "";
      this.CalfDp9 = "El Diagnóstico Particular no incluye información histórica que permita visualizar como ha cambiado la problemática a lo largo del tiempo, por lo que es necesario realizar el análisis e incluir esta información."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, ya que es importante conocer la tendencia de la problemática, su atención se considera relevante.";
      this.PonDp9 = 0;
    }
  }
  //******************************PREGUNTA 10******************************************
  public RespuestaDp10(): void {
    if (this.Dp10Calf == 9) {
      this.textAreaValueDp10 = "Sin recomendaciones";
      this.CalfDp10 = "La situación actual presentada en el Diagnóstico Particular se describe claramente y se cuantifica, es importante que esta información sirva como base para la definición de indicadores a nivel propósito.";
      this.PonDp10 = 8;
    }
    else if (this.Dp10Calf == 6) {
      this.textAreaValueDp10 = "";
      this.CalfDp10 = "La situación actual del problema no está cuantificada, esta información permite conocer la magnitud o tamaño del problema en función de la población o área de enfoque, por lo que se requiere documentar."
      "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera urgente ya que la situación actual nos permite medir los resultados del Programa.";
      this.PonDp10 = 4;
    }
    else if (this.Dp10Calf == 3) {
      this.textAreaValueDp10 = "";
      this.CalfDp10 = "La situación actual del problema no se presenta de manera clara, esta información debe estructurarse de forma que permita conocer la magnitud o tamaño del problema en función de la población o área de enfoque, por lo que se requiere documentar."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera urgente ya que la situación actual nos permite medir los resultados del Programa.";
      this.PonDp10 = 0;
    }
  }
  //******************************PREGUNTA 11******************************************
  public RespuestaDp11(): void {
    if (this.Dp11Calf == 9) {
      this.textAreaValueDp11 = "Sin recomendaciones";
      this.CalfDp11 = "Se cuenta, cuando menos, con dos niveles de causas.";
      this.PonDp11 = 4;
    }
    else if (this.Dp11Calf == 6) {
      this.textAreaValueDp11 = "";
      this.CalfDp11 = "No aplica";
      this.PonDp11 = 2;
    }
    else if (this.Dp11Calf == 3) {
      this.textAreaValueDp11 = "";
      this.CalfDp11 = "No se cuenta, cuando menos, con dos niveles de causas."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera urgente, para garantizar la correcta atención a la problemática.";
      this.PonDp11 = 0;
    }
  }
  //******************************PREGUNTA 12******************************************
  public RespuestaDp12(): void {
    if (this.Dp12Calf == 9) {
      this.textAreaValueDp12 = "Sin recomendaciones";
      this.CalfDp12 = "En lo que respecta al árbol de problemas, se estima que éste identifica un número de causas razonables que permita analizar alternativas para la solución de la problemática.";
      this.PonDp12 = 4;
    }
    else if (this.Dp12Calf == 6) {
      this.textAreaValueDp12 = "";
      this.CalfDp12 = "En lo que respecta al árbol de problemas, se considera que es necesario ampliar el análisis de la problemática para identificar un mayor número de causas que permitan identificar alternativas de solución."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp12 = 2;
    }
    else if (this.Dp12Calf == 3) {
      this.textAreaValueDp12 = "";
      this.CalfDp12 = "En lo que respecta al árbol de problemas, se considera que el análisis de la problemática no identifica todas las causas que dan origen al problema, por lo que es necesario ampliar el análisis y replantear el árbol de problemas."
      "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp12 = 0;
    }
  }
  //******************************PREGUNTA 13******************************************
  public RespuestaDp13(): void {
    if (this.Dp13Calf == 9) {
      this.textAreaValueDp13 = "Sin recomendaciones";
      this.CalfDp13 = "El análisis de corresponsabilidad cuenta con una lógica correcta entre las relaciones causas-medios y efectos-fines contenidas en los árboles de problemas y objetivos.";
      this.PonDp13 = 4;
    }
    else if (this.Dp13Calf == 6) {
      this.textAreaValueDp13 = "";
      this.CalfDp13 = "El análisis de corresponsabilidad no es claro para algunas relaciones causas-medios y efectos-fines, por lo que es necesario verificarlas. "
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp13 = 2;
    }
    else if (this.Dp13Calf == 3) {
      this.textAreaValueDp13 = "";
      this.CalfDp13 = "La lógica del análisis de corresponsabilidad no es clara, por lo que se requiere verificar la relación entre causas-medios y efectos-fines."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp13 = 2;
    }
  }
  //******************************PREGUNTA 14******************************************
  public RespuestaDp14(): void {
    if (this.Dp14Calf == 9) {
      this.textAreaValueDp14 = "Sin recomendaciones";
      this.CalfDp14 = "Se considera que el análisis de alternativas contiene la información que permite evaluar las diferentes alternativas de solución. Es importante mencionar que estas alternativas deben considerar la participación de los involucrados.";
      this.PonDp14 = 4;
    }
    else if (this.Dp14Calf == 6) {
      this.textAreaValueDp14 = "";
      this.CalfDp14 = "Se considera que es necesario ampliar el análisis de las alternativas de solución, de acuerdo a las atribuciones normativas, factibilidad técnica, económica y ambiental, así como aquella que resulte pertinente, eficiente y eficaz."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, ya que el análisis de alternativas permite identificar soluciones más eficientes, su atención se considera relevante.";
      this.PonDp14 = 2;
    }
    else if (this.Dp14Calf == 3) {
      this.textAreaValueDp14 = "";
      this.CalfDp14 = "En el diagnóstico no se presentan alternativas de solución, por lo que se requiere identificarlas y analizarlas de acuerdo a las atribuciones normativas, factibilidad técnica, económica y ambiental, así como aquella que resulte pertinente, eficiente y eficaz. "
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, ya que el análisis de alternativas permite identificar soluciones más eficientes, su atención se considera relevante.";
      this.PonDp14 = 0;
    }
  }
  //******************************PREGUNTA 15******************************************
  public RespuestaDp15(): void {
    if (this.Dp15Calf == 9) {
      this.textAreaValueDp15 = "Sin recomendaciones";
      this.CalfDp15 = "La estructura analítica del programa es consistente con el análisis de las alternativas.";
      this.PonDp15 = 4;
    }
    else if (this.Dp15Calf == 6) {
      this.textAreaValueDp15 = "";
      this.CalfDp15 = "La estructura analítica del programa no es consistente con la información del análisis de alternativas, por lo que es necesario verificar el análisis de alternativas."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp15 = 2;
    }
    else if (this.Dp15Calf == 3) {
      this.textAreaValueDp15 = "";
      this.CalfDp15 = "No se presenta la estructura analítica del programa, por lo que es necesario actualizar el Diagnóstico Particular con esta información."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp15 = 0;
    }
  }
  //******************************PREGUNTA 16******************************************
  public RespuestaDp16(): void {
    if (this.Dp16Calf == 9) {
      this.textAreaValueDp16 = "Sin recomendaciones";
      this.CalfDp16 = "Se presenta información cualitativa y cuantitativa que justifica los objetivos de la intervención.";
      this.PonDp16 = 4;
    }
    else if (this.Dp16Calf == 6) {
      this.textAreaValueDp16 = "";
      this.CalfDp16 = "La información cualitativa y cuantitativa que se requiere para justificar los objetivos de la intervención se encuentra incompleta, por lo que es necesario ampliarla."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp16 = 2;
    }
    else if (this.Dp16Calf == 3) {
      this.textAreaValueDp16 = "";
      this.CalfDp16 = "No se presenta información cualitativa y cuantitativa que justifique los objetivos de la intervención, por lo que es necesario incluirla."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera relevante.";
      this.PonDp16 = 0;
    }
  }
  //******************************PREGUNTA 17******************************************
  public RespuestaDp17(): void {
    if (this.Dp17Calf == 9) {
      this.textAreaValueDp17 = "Sin recomendaciones";
      this.CalfDp17 = "De acuerdo con el tipo de intervención, se presenta la identificación y cuantificación de la población.";
      this.PonDp17 = 8;
    }
    else if (this.Dp17Calf == 6) {
      this.textAreaValueDp17 = "";
      this.CalfDp17 = "De acuerdo con el tipo de intervención, se presenta parcialmente la identificación y cuantificación de la población, por lo que es necesario complementarla."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera urgente, ya que es necesario identificar y cuantificar la cobertura del programa.";
      this.PonDp17 = 4;
    }
    else if (this.Dp17Calf == 3) {
      this.textAreaValueDp17 = "";
      this.CalfDp17 = "De acuerdo con el tipo de intervención, no se identifica o cuantifica la población, por lo que se requiere incluir esta información."
        + "\nEsta recomendación formará parte del plan de mejora continua del Programa, su atención se considera urgente, ya que es necesario identificar y cuantificar la cobertura del programa.";
      this.PonDp17 = 0;
    }
  }
  //******************************PREGUNTA 18******************************************
  public RespuestaDp18(): void {
    if (this.Dp18Calf == 9) {
      this.textAreaValueDp18 = "Sin recomendaciones";
      this.CalfDp18 = "Se considera que se identifican los suficientes programas que complementan a éste.";
      this.PonDp18 = 2;
    }
    else if (this.Dp18Calf == 6) {
      this.textAreaValueDp18 = "";
      this.CalfDp18 = "Se considera que se identifican parcialmente los programas complementarios, por lo que es necesario revisar los instrumentos de desarrollo y Ley de Presupuesto para identificar otros programas relacionados."
        + "\nEsta recomendación se integrará al plan de mejora continua del Programa.";
      this.PonDp18 = 1;
    }
    else if (this.Dp18Calf == 3) {
      this.textAreaValueDp18 = "No se identifican programas complementarios, por lo que es necesario revisar los instrumentos de desarrollo y Ley de Presupuesto para identificar otros programas relacionados."
        + "\nEsta recomendación se integrará al plan de mejora continua del Programa.";
      this.CalfDp18 = "";
      this.PonDp18 = 0;
    }
  }
  //******************************PREGUNTA 19******************************************
  public RespuestaDp19(): void {
    if (this.Dp19Calf == 9) {
      this.textAreaValueDp19 = "Sin recomendaciones";
      this.CalfDp19 = "De acuerdo con la población objetivo, se identifica el tipo de beneficiario y los elementos que se requieren para la construcción del padrón de beneficiarios.";
      this.PonDp19 = 2;
    }
    else if (this.Dp19Calf == 6) {
      this.textAreaValueDp19 = "";
      this.CalfDp19 = "De acuerdo con la población objetivo, se identifica el tipo de beneficiario y algunos elementos que se requieren para la construcción del padrón de beneficiarios."
        + "\nEsta recomendación será registrada en el plan de mejora continua del Programa.";
      this.PonDp19 = 1;
    }
    else if (this.Dp19Calf == 3) {
      this.textAreaValueDp19 = "";
      this.CalfDp19 = "De acuerdo con la población objetivo, no se identifica el tipo de beneficiario o los elementos que se requieren para la construcción del padrón de beneficiarios."
        + "\nEsta recomendación será registrada en el plan de mejora continua del Programa.";
      this.PonDp19 = 0;
    }
  }
  //  //******************************PREGUNTA 20******************************************
  public RespuestaDp20(): void {
    if (this.Dp20Calf == 9) {
      this.textAreaValueDp20 = "Sin recomendaciones";
      this.CalfDp20 = "Se presenta la MIR en el apartado correspondiente.";
      this.PonDp20 = 2;
    }
    else if (this.Dp20Calf == 6) {
      this.textAreaValueDp20 = "";
      this.CalfDp20 = "No aplica";
      this.PonDp20 = 1;

    }
    else if (this.Dp20Calf == 3) {
      this.textAreaValueDp20 = "";
      this.CalfDp20 = "No se presenta la MIR en el apartado correspondiente."
        + "\nEsta recomendación se integrará al plan de mejora continua del Programa.";
      this.PonDp20 = 0;
    }
  }
  //  //******************************PREGUNTA 1 MIR ******************************************
  public RespuestaMir1(): void {
    if (this.Mir1Calf == 9) {
      this.textAreaValueMir1 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir1 = 8;
      }
      else {
        this.PonMir1 = 6
      }

    }

    else if (this.Mir1Calf == 3) {
      this.textAreaValueMir1 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir1 = 0;
      }
      else {
        this.PonMir1 = 0
      }
    }
  }
  //  //******************************PREGUNTA 2 MIR ******************************************
  public RespuestaMir2(): void {
    if (this.Mir2Calf == 9) {
      this.textAreaValueMir2 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir2 = 0;
      }
      else {
        this.PonMir2 = 4
      }
    }

    else if (this.Mir2Calf == 3) {
      this.textAreaValueMir2 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir2 = 0;
      }
      else {
        this.PonMir2 = 0
      }
    }
  }
  // Seccion 3. Fin
  //  //******************************PREGUNTA 3 MIR ******************************************
  // 3.-¿Los indicadores permiten medir el objetivo planteado en el resumen narrativo a nivel fin
  //Orden Informe 13
  public RespuestaMir3(): void {
    if (this.Mir3Calf == 9) {
      this.textAreaValueMir3 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir3 = 4;
      }
      else {
        this.PonMir3 = 4
      }
    }
    else if (this.Mir3Calf == 6) {
      this.textAreaValueMir3 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir3 = 2;
      }
      else {
        this.PonMir3 = 2
      }
    }
    else if (this.Mir3Calf == 3) {
      this.textAreaValueMir3 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir3 = 0;
      }
      else {
        this.PonMir3 = 0
      }
    }
  }
  // 4. Medios de verificación
  // 4 .-¿Los medios de verificación de los indicadores de nivel fin se encuentran totalmente
  //documentados?
  //Orden informe 19
  //  //******************************PREGUNTA 4 MIR ******************************************
  public RespuestaMir4(): void {
    if (this.Mir4Calf == 9) {
      this.textAreaValueMir4 = "Sin recomendaciones";
      this.PonMir4 = 2;
    }
    else if (this.Mir4Calf == 6) {
      this.textAreaValueMir4 = "";
      this.PonMir4 = 1;
    }
    else if (this.Mir4Calf == 3) {
      this.textAreaValueMir4 = "";
      this.PonMir4 = 0;
    }
  }
  //5. Supuestos
  //5.-¿Si se contribuye al logro del Fin y se mantienen vigentes los Supuestos asociados a éste, se garantizará la sustentabilidad de losbeneficios del programa?
  //Orden Informe 23
  //  //******************************PREGUNTA 5 MIR ******************************************
  public RespuestaMir5(): void {
    if (this.Mir5Calf == 9) {
      this.textAreaValueMir5 = "Sin recomendaciones";
      this.PonMir5 = 4;
    }
    else if (this.Mir5Calf == 6) {
      this.textAreaValueMir5 = "";
      this.PonMir5 = 2;
    }
    else if (this.Mir5Calf == 3) {
      this.textAreaValueMir5 = "";
      this.PonMir5 = 0;
    }
  }
  //2. Objetivos
  //6- ¿La redacción del propósito cumple con la sintaxis, población objetivo más situación deseada? (población objetivo o área de enfoque+ verbo en presente + resultado logrado)
  // Orden Informe 5
  //  //******************************PREGUNTA 6 MIR ******************************************
  public RespuestaMir6(): void {
    if (this.Mir6Calf == 9) {
      this.textAreaValueMir6 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir6 = 8;
      }
      else {
        this.PonMir6 = 6
      }
    }

    else if (this.Mir6Calf == 3) {
      this.textAreaValueMir6 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir6 = 0;
      }
      else {
        this.PonMir6 = 0
      }
    }
  }
  // Seccion 2. Objetivos
  // 7.- ¿La redacción del propósito es consistente con la población objetivo identificada en el DxP?
  //  //******************************PREGUNTA 7 MIR ******************************************
  // Orden Informe 6
  public RespuestaMir7(): void {
    if (this.Mir7Calf == 9) {
      this.textAreaValueMir7 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir7 = 10;
      }
      else {
        this.PonMir7 = 6
      }
    }

    else if (this.Mir7Calf == 3) {
      this.textAreaValueMir7 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir7 = 0;
      }
      else {
        this.PonMir7 = 0
      }
    }
  }
  // Seccion 1. Alineacion Estrategica
  // 8.- ¿La MIR cuenta los indicadores publicados en el PG 18-24 que corresponde de acuerdo con el pre análisis entregado a la dependencia?
  // Orden del Informe 2
  //  //******************************PREGUNTA 8 MIR ******************************************
  public RespuestaMir8(): void {
    if (this.Mir8Calf == 9) {
      this.textAreaValueMir8 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir8 = 0;
      }
      else {
        this.PonMir8 = 4
      }

    }
    else if (this.Mir8Calf == 6) {
      this.textAreaValueMir8 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir8 = 0;
      }
      else {
        this.PonMir8 = 2
      }
    }
    else if (this.Mir8Calf == 3) {
      this.textAreaValueMir8 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir8 = 0;
      }
      else {
        this.PonMir8 = 0
      }
    }
  }
  //Seccion 3. Indicadores
  //.-¿Los indicadores permiten medir el objetivo planteado en el resumen narrativo de nivel propósito?
  //  //******************************PREGUNTA 9 MIR ******************************************
  // Orden Informe 14
  public RespuestaMir9(): void {
    if (this.Mir9Calf == 9) {
      this.textAreaValueMir9 = "Sin recomendaciones";
      this.PonMir9 = 4
    }
    else if (this.Mir9Calf == 6) {
      this.textAreaValueMir9 = "";
      this.PonMir9 = 2
    }
    else if (this.Mir9Calf == 3) {
      this.textAreaValueMir9 = "";
      this.PonMir9 = 0
    }
  }
  //4. Medios de verificación
  //10.- ¿Los medios de verificación de los indicadores de nivel propósito están totalmente documentados?
  //  //******************************PREGUNTA 10 MIR ******************************************
  // Orden Informe 20
  public RespuestaMir10(): void {
    if (this.Mir10Calf == 9) {
      this.textAreaValueMir10 = "Sin recomendaciones";
      this.PonMir10 = 2
    }
    else if (this.Mir10Calf == 6) {
      this.textAreaValueMir10 = "";
      this.PonMir10 = 1
    }
    else if (this.Mir10Calf == 3) {
      this.textAreaValueMir10 = "";
      this.PonMir10 = 0
    }
  }
  // 5. Supuestos
  // 11.- ¿Si se logra el Propósito del Pp y se cumplen los Supuestos asociados a éste, se contribuirá al logro del Fin?
  //  //******************************PREGUNTA 11 MIR ******************************************
  //Orden Informe 24
  public RespuestaMir11(): void {
    if (this.Mir11Calf == 9) {
      this.textAreaValueMir11 = "Sin recomendaciones";
      this.PonMir11 = 4
    }
    else if (this.Mir11Calf == 6) {
      this.textAreaValueMir11 = "";
      this.PonMir11 = 2
    }
    else if (this.Mir11Calf == 3) {
      this.textAreaValueMir11 = "";
      this.PonMir11 = 0
    }
  }
  // Seccion 2. Objetivos
  //12.- ¿A nivel componente, se describen claramente los Productos terminados o Servicios proporcionados, seguidos de Verbo en pasado participio?
  //Orden Informe 7
  //  //******************************PREGUNTA 12 MIR ******************************************
  public RespuestaMir12(): void {
    if (this.Mir12Calf == 9) {
      this.textAreaValueMir12 = "Sin recomendaciones";
      this.PonMir12 = 4;
    }
    else if (this.Mir12Calf == 6) {
      this.textAreaValueMir12 = "";
      this.PonMir12 = 2;
    }
    else if (this.Mir12Calf == 3) {
      this.textAreaValueMir12 = "";
      this.PonMir12 = 0;
    }
  }
  // Seccion 1. Alineación estratégica
  //13.- ¿La MIR incluye los indicadores publicados en los Programas Sectoriales que corresponde de acuerdo con el pre análisis entregado a la dependencia?
  // Orden Informe 3
  //  //******************************PREGUNTA 13 MIR ******************************************
  public RespuestaMir13(): void {
    if (this.Mir13Calf == 9) {
      this.textAreaValueMir13 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir13 = 0;
      }
      else {
        this.PonMir13 = 4
      }
    }
    else if (this.Mir13Calf == 6) {
      this.textAreaValueMir13 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir13 = 0;
      }
      else {
        this.PonMir13 = 2
      }
    }
    else if (this.Mir13Calf == 3) {
      this.textAreaValueMir13 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir13 = 0;
      }
      else {
        this.PonMir13 = 0
      }
    }
  }
  //Seccion 3. Indicadores
  //¿Los indicadores permiten medir el objetivo planteado en el resumen narrativo a nivel componente?
  //Orden Informe 15
  //  //******************************PREGUNTA 14 MIR ******************************************
  public RespuestaMir14(): void {
    if (this.Mir14Calf == 9) {
      this.textAreaValueMir14 = "Sin recomendaciones";
      this.PonMir14 = 4
    }
    else if (this.Mir14Calf == 6) {
      this.textAreaValueMir14 = "";
      this.PonMir14 = 2
    }
    else if (this.Mir14Calf == 3) {
      this.textAreaValueMir14 = "";
      this.PonMir14 = 0
    }
  }
  //4. Medios de verificación
  //¿Los medios de verificación de los indicadores de nivel componente están totalmente documentados?
  //Orden Informe 21
  //  //******************************PREGUNTA 15 MIR ******************************************
  public RespuestaMir15(): void {
    if (this.Mir15Calf == 9) {
      this.textAreaValueMir15 = "Sin recomendaciones";
      this.PonMir15 = 2
    }
    else if (this.Mir15Calf == 6) {
      this.textAreaValueMir15 = "";
      this.PonMir15 = 1
    }
    else if (this.Mir15Calf == 3) {
      this.textAreaValueMir15 = "";
      this.PonMir15 = 0
    }
  }
  // Secion 2. Objetivos
  //¿Cuál es el número de entregables máximo que tienen los componentes?
  // Orden Informe 21
  //  //******************************PREGUNTA 16 MIR ******************************************
  public RespuestaMir16(): void {
    if (this.Mir16Calf == 9) {
      this.textAreaValueMir16 = "Sin recomendaciones";
      this.PonMir16 = 2
    }
    else if (this.Mir16Calf == 6) {
      this.textAreaValueMir16 = "";
      this.PonMir16 = 1
    }
    else if (this.Mir16Calf == 3) {
      this.textAreaValueMir16 = "";
      this.PonMir16 = 0
    }
  }
  //Seccion 2. Objetivos
  //¿Los entregables de componente son consistentes con el objetivo?
  // Orden Informe 8
  //  //******************************PREGUNTA 17 MIR ******************************************
  public RespuestaMir17(): void {
    if (this.Mir17Calf == 9) {
      this.textAreaValueMir17 = "Sin recomendaciones";
      this.PonMir17 = 4
    }
    else if (this.Mir17Calf == 6) {
      this.textAreaValueMir17 = "";
      this.PonMir17 = 2
    }
    else if (this.Mir17Calf == 3) {
      this.textAreaValueMir17 = "";
      this.PonMir17 = 0
    }
  }
  // Seccion 2 Objetivos
  // 18.- ¿Qué porcentaje de los entregables de componente se replican en los entregables de las actividades?
  // Orden Informe 10
  //  //******************************PREGUNTA 18 MIR ******************************************
  public RespuestaMir18(): void {
    if (this.Mir18Calf == 9) {
      this.textAreaValueMir18 = "Sin recomendaciones";
      this.PonMir18 = 4
    }
    else if (this.Mir18Calf == 6) {
      this.textAreaValueMir18 = "";
      this.PonMir18 = 2
    }
    else if (this.Mir18Calf == 3) {
      this.textAreaValueMir18 = "";
      this.PonMir18 = 0
    }
  }
  // Seccion 2 Objetivos
  // 19.- ¿Todos los componentes tienen actividades asociadas?
  // Orden Informe 11
  //  //******************************PREGUNTA 19 MIR ******************************************
  public RespuestaMir19(): void {
    if (this.Mir19Calf == 9) {
      this.textAreaValueMir19 = "Sin recomendaciones";
      this.PonMir19 = 4
    }

    else if (this.Mir19Calf == 3) {
      this.textAreaValueMir19 = "";
      this.PonMir19 = 0
    }
  }
  // Seccion 5. Supuestos
  // ¿Si se producen los componentes y se cumplen con los supuestos asociados a éstos, se logrará el Propósito del Pp?
  // Orden Informe 25
  //  //******************************PREGUNTA 20 MIR ******************************************
  public RespuestaMir20(): void {
    if (this.Mir20Calf == 9) {
      this.textAreaValueMir20 = "Sin recomendaciones";
      this.PonMir20 = 4
    }
    else if (this.Mir20Calf == 6) {
      this.textAreaValueMir20 = "";
      this.PonMir20 = 2
    }
    else if (this.Mir20Calf == 3) {
      this.textAreaValueMir20 = "";
      this.PonMir20 = 0
    }
  }
  //Seccion 2. Objetivo
  //21. ¿Las actividades se describen como sustantivo derivado de verbo, seguido del complemento?
  //Orden Informe 25
  //  //******************************PREGUNTA 21 MIR ******************************************
  public RespuestaMir21(): void {
    if (this.Mir21Calf == 9) {
      this.textAreaValueMir21 = "Sin recomendaciones";
      this.PonMir21 = 2
    }
    else if (this.Mir21Calf == 6) {
      this.textAreaValueMir21 = "";
      this.PonMir21 = 1
    }
    else if (this.Mir21Calf == 3) {
      this.textAreaValueMir21 = "";
      this.PonMir21 = 0
    }
  }
  //Seccion 5. Supuestos
  //22. ¿Si se completan las Actividades programadas y se cumplen con los Supuestos asociados a éstas, se lograrán producir los componentes?
  //Orden Informe 25
  //  //******************************PREGUNTA 22 MIR ******************************************
  public RespuestaMir22(): void {
    if (this.Mir22Calf == 9) {
      this.textAreaValueMir22 = "Sin recomendaciones";
      this.PonMir22 = 4
    }
    else if (this.Mir22Calf == 6) {
      this.textAreaValueMir22 = "";
      this.PonMir22 = 2
    }
    else if (this.Mir22Calf == 3) {
      this.textAreaValueMir22 = "";
      this.PonMir22 = 0
    }
  }
  //5.- Indicadores
  //¿Las fechas de disponibilidad de la información de indicadores son consistentes?
  //Orden Informe 17
  //  //******************************PREGUNTA 23 MIR ******************************************
  public RespuestaMir23(): void {
    if (this.Mir23Calf == 9) {
      this.textAreaValueMir23 = "Sin recomendaciones";
      this.PonMir23 = 2
    }
    else if (this.Mir23Calf == 6) {
      this.textAreaValueMir23 = "";
      this.PonMir23 = 1
    }
    else if (this.Mir23Calf == 3) {
      this.textAreaValueMir23 = "";
      this.PonMir23 = 0
    }
  }
  //Seccion 3. Indicadores
  //¿Porcentaje de indicadores que tienen un plan de mejora autogestiva? para todos los niveles
  //Orden Informe 18
  //  //******************************PREGUNTA 24 MIR ******************************************
  public RespuestaMir24(): void {
    if (this.Mir24Calf == 9) {
      this.textAreaValueMir24 = "Sin recomendaciones";
      this.PonMir24 = 4
    }
    else if (this.Mir24Calf == 6) {
      this.textAreaValueMir24 = "";
      this.PonMir24 = 2
    }
    else if (this.Mir24Calf == 3) {
      this.textAreaValueMir24 = "";
      this.PonMir24 = 0
    }
  }
  //Seccion 3. Indicadores
  //¿El algoritmo de los indicadores es congruente con su definición y unidad de medida?
  //Orden Informe 16
  //  //******************************PREGUNTA 25 MIR ******************************************
  public RespuestaMir25(): void {
    if (this.Mir25Calf == 9) {
      this.textAreaValueMir25 = "Sin recomendaciones";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir25 = 10;
      }
      else {
        this.PonMir25 = 6
      }
    }
    else if (this.Mir25Calf == 6) {
      this.textAreaValueMir25 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir25 = 5;
      }
      else {
        this.PonMir25 = 3
      }
    }
    else if (this.Mir25Calf == 3) {
      this.textAreaValueMir25 = "";
      if (this.dep == "UG" || this.dep == "TJA" || this.dep == "PDH" || this.dep == "TEEG" || this.dep == "IEEG" || this.dep == "IACIP" || this.dep == "FGEG") {
        this.PonMir25 = 0;
      }
      else {
        this.PonMir25 = 0
      }
    }
  }
  //Seccion 5. supuestos
  //¿Existen supuestos que cumplen con los criterios de ser situaciones externas y de probabilidad media para cada uno de los niveles de la MIR?
  //Orden Informe 22
  //  //******************************PREGUNTA 26 MIR ******************************************
  public RespuestaMir26(): void {
    if (this.Mir26Calf == 9) {
      this.textAreaValueMir26 = "Sin recomendaciones";
      this.PonMir26 = 4
    }
    else if (this.Mir26Calf == 6) {
      this.textAreaValueMir26 = "";
      this.PonMir26 = 2
    }
    else if (this.Mir26Calf == 3) {
      this.textAreaValueMir26 = "";
      this.PonMir26 = 0
    }
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
   // A simple method for the string-to-date conversion
   private parse(json) {
    Object.keys(json).map((key) => {
      const date = new Date(json[key]);
      if (!isNaN(date.getTime())) {
        json[key] = date;
      }
    });

    return json;
  }
  private parseExact(json) {
    Object.keys(json).map(key => {
      const date = this.intl.parseDate(json[key], 'yyyy-MM-dd');
      if (date) { json[key] = date; }
    });

    return json;
}
// public parseObjectDates(target: any): any {
//   const result = Object.assign({}, target);

//   Object.keys(result).forEach((key) => {
//     const date = new Date(result[key]);
//     if (!isNaN(date.getTime())) {
//       result[key] = date;
//     }
//   });

//   return result;
// }

  public handleChange(value: Date) {
    // Update the JSON birthDate string date
    this.model.value = this.intl.formatDate(value, "yyyy-MM-dd");

    this.output = JSON.stringify(this.model);
    this.fecha = this.parseExact(this.model);
  }
}
