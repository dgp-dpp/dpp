import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridDataResult, PageChangeEvent, DataBindingDirective } from '@progress/kendo-angular-grid';
import { SortDescriptor,process, DataResult, orderBy } from '@progress/kendo-data-query';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, of } from 'rxjs';
import { bloques } from 'src/app/models/data.bloques';
import { categories } from 'src/app/models/data.categories';
import { CursosService } from 'src/app/services/cursos.service';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-formulario-pac',
  templateUrl: './formulario-pac.component.html',
  styleUrls: ['./formulario-pac.component.css'],
  providers: [ProductService]
})
export class FormularioPacComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  @Input() public value: any;

  public listCursos:  Array<{ value: number ;text: string}> = [];
  public listDep:  Array<{ text: string; value: number}> = [];
  public selectedValue = "";

  //GRID
  public dropDownItems = bloques;
  public defaultItem = { text: "Filtrar por Curso", value: null };

    public listInscripcion: Array<{idInscripcion: number;sigla:string; nombre:string; rfc:string; email:string; puesto:string;ur:string;curso:string;bloque:string;emailAterno:string}> = [];
    public gridItems: Observable<GridDataResult>;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: number = null;
    public gridView: any[];
    public mySelection: string[] = [];



  form: FormGroup;

  obtenerCursos() {
    this._cursosService.getListCursos().pipe(
      map(response =>response)
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

  obtenerDependencias() {
    this._depService.GetListDep().pipe(
      map(response =>response)
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
      Sigla: this.form.get('Sigla')?.value,
      Nombre: this.form.get('Nombre')?.value,
      Rfc: this.form.get('Rfc')?.value,
      Email: this.form.get('Email')?.value,
      Puesto: this.form.get('Puesto')?.value,
      Ur: this.form.get('Ur')?.value,
      Curso: this.form.get('Curso')?.value,
      Bloque: this.form.get('Bloque')?.value,
      EmailAlterno: this.form.get('EmailAlterno')?.value


    }
    this._inscripcionService.saveInscripcion(inscripcion).subscribe(_data => {
      this.toastr.success('El Participante '+ inscripcion.Nombre +' fue registrado con exito!', 'Participante Registrado');
      this.form.reset();
    }, error => {
      this.toastr.error('Opss.. ocurrio un error','Error')
      console.log(error);
    })

  }

  constructor(private _cursosService: CursosService,
              private _depService: DependenciasService,
              private _inscripcionService: InscripcionesService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private service: ProductService,
              ) {

    this.form = this.fb.group({
      Sigla:  ['', Validators.required],
      Nombre:  ['',Validators.required],
      Rfc: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]] ,
      Email: ['', [Validators.required, Validators.email]],
      Puesto:  ['', Validators.required],
      Ur:  ['', Validators.required],
      Curso: ['', Validators.required],
      Bloque:  ['', Validators.required],
      EmailAlterno:  ['', [Validators.email]],

    });
    this.allData = this.allData.bind(this);
    this.loadGridItems()
  }

  ngOnInit(): void {
    this.loadGridItems();
    this.gridView = this.listInscripcion;
    this.obtenerCursos();
    this.obtenerDependencias();


  }
  public data: any = {
    Sigla:"",
    Nombre: "",
    Rfc: "",
    Email: "",
    Puesto: "",
    Ur: "",
    Curso: "",
    Bloque:"",
    EmailAlterno:""
  };
  public listBloque: Array<string> = [
    "Bloque 1",
    "Bloque 2",
    "Bloque 3",
    "Bloque 4",
    "Bloque 5"
  ];
//GRID
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public loadGridItems(): void {
   this._inscripcionService.GetListInscripcion().pipe(
      map(response =>response)
    ).subscribe(_data => {
      _data =_data.map(_par=>{
        const {idInscripcion,sigla,nombre,rfc,email,puesto,ur,curso,bloque,emailAlterno}=_par;
        return{
          idInscripcion:idInscripcion,
          sigla:sigla,
          nombre:nombre,
          rfc:rfc,
          email:email,
          puesto:puesto,
          ur:ur,
          curso:curso,
          bloque:bloque,
          emailAlterno:emailAlterno
        }
      }
      );


      this.listInscripcion = _data;
       console.log(_data);
      }, error => {
        console.log(error);
      })


      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm

  }
   //pdf
   public onFilter(inputValue: string): void {
    this.gridView = process(this.listInscripcion, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "idInscripcion",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "sigla",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "nombre",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
    this.dataBinding.skip = 0;
  }
   //excelModule
   public allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(this.listInscripcion, {
        sort: [{ field: "nombre", dir: "asc" }],
      }).data,
    };
    return result;
  }
  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  // DropDownList para filtrar Grid por categoría de producto
public handleFilterChange(item: {
  text: string;
  value: number | null;
}): void {
  this.filterTerm = item.value;
  this.skip = 0;
  this.loadGridItems();
}

public getList(
  skip: number,
  pageSize: number,
  sortDescriptor: SortDescriptor[],
  filterTerm: string
): Observable<DataResult> {
  let data;
  if (filterTerm) {
    data = process(orderBy(this.listInscripcion, sortDescriptor), {
      filter: {
        logic: "and",
        filters: [
          {
            field: "idInscripcion",
            operator: "eq",
            value: filterTerm
          }
        ]
      }
    }).data;
  } else {
    data = orderBy(this.listInscripcion, sortDescriptor);
  }
  return of({
    data: data.slice(skip, skip + pageSize),
    total: data.length
  });
}


}
