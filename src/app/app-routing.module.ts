import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Views/Administracion/usuarios/usuarios.component';
import { HomeComponent } from './Views/Home/home/home.component';
import { CreceComponent } from './Views/Planeacion/crece/crece.component';
import { CreceCuestionarioComponent } from './Views/Planeacion/crece-cuestionario/crece-cuestionario.component';
import { LoginComponent } from "./Views/login/login.component";
import { RegisterComponent } from "./Views/register/register.component";
import {CuestionariosComponent} from "./Views/Administracion/cuestionarios/cuestionarios.component";
import { AppComponent } from './app.component';
import { CarruselComponent } from './Views/Home/carrusel/carrusel.component';
import { PruebaspdfComponent } from './Views/Administracion/pruebaspdf/pruebaspdf.component';

import { KendoComponent } from './Views/Administracion/kendo/kendo.component';
import { CatalogoProgramasComponent } from './Views/Administracion/catalogo-programas/catalogo-programas.component';
import { ChrtshighComponent } from './Views/Administracion/highcharts/chrtshigh.component';
import { Login2Component } from './Views/Administracion/login2/login2.component';
import { PruebaExcelComponent } from './Views/Administracion/prueba-excel/prueba-excel.component';
import { CreceRespuestasComponent } from './Views/Planeacion/crece-respuestas/crece-respuestas.component';
import { CreceMonitorAvanceComponent } from './Views/Planeacion/crece-monitor-avance/crece-monitor-avance.component';
import { CreceInformeComponent } from './Views/Planeacion/crece-informe/crece-informe.component';
import { FormatoComponent } from './Views/Reestructura/formato/formato.component';
import { PresentacionComponent } from './Views/Reestructura/presentacion/presentacion.component';
import { RestrucAdminComponent } from './Views/Reestructura/restruc-admin/restruc-admin.component';
import { RestrucPrograComponent } from './Views/Reestructura/restruc-progra/restruc-progra.component';
import { TableroReestructuraComponent } from './Views/Reestructura/tablero-reestructura/tablero-reestructura.component';
import { TabsTableroComponent } from './Views/Reestructura/tabs-tablero/tabs-tablero.component';
import { TableroPowerComponent } from './Views/Reestructura/tabs-tablero/tablero-power/tablero-power.component';

import{AuthGuard} from './shared/guards/auth.guard'
import { IndiceDppComponent } from './Views/IndiceDpp/indice-dpp/indice-dpp.component';
import { IntegradorComponent } from './Views/Capacitacion/integrador/integrador.component';
import { TableroComponent } from './Views/Capacitacion/tablero/tablero.component';
import { FormularioPacComponent } from './Views/Capacitacion/formulario-pac/formulario-pac.component';
import { CensoComponent } from './Views/CensoGpR/censo/censo.component';
import { CensoSeguimientoComponent } from './Views/CensoGpR/censo-seguimiento/censo-seguimiento.component';
import { CensoTableroComponent } from './Views/CensoGpR/censo-tablero/censo-tablero.component';
import { CreceFormualarioComponent } from './Views/Planeacion/crece-formulario/crece-formualario.component';
import { DirectorioGpRComponent } from './Views/CensoGpR/directorio-gp-r/directorio-gp-r.component';
import { AvanceRestructuraComponent } from './Views/Reestructura/avance-restructura/avance-restructura.component';
import { PruebaFirebaseComponent } from './Views/Administracion/prueba-firebase/prueba-firebase.component';
import { Pf2023Component } from './Views/PaqueteFiscal2023/pf2023/pf2023.component';

const routes: Routes = [

  {path: 'cuestionarios', component:CuestionariosComponent, canActivate:[AuthGuard]},

  {path: 'usuarios', component:UsuariosComponent},
  { path: 'crece', component:CreceComponent },
  { path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'crece_preguntas', component:CreceCuestionarioComponent},
  { path: "login", component: LoginComponent},
  { path: "login2", component: Login2Component},
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "carrusel", component:CarruselComponent, canActivate:[AuthGuard] },
  { path: "pruebaspdf", component:PruebaspdfComponent},
  { path: "pruebaExcel", component:PruebaExcelComponent},
 {path: "crece-respuestas",component:CreceRespuestasComponent},
 {path: "crece-monitor-seguimiento",component:CreceMonitorAvanceComponent},
 {path: "crece-informe",component:CreceInformeComponent},
 {path:"formato", component:FormatoComponent},
 {path:"presentacion", component:PresentacionComponent},
 {path:"re-admin", component:RestrucAdminComponent},
 {path:"re-progra", component:RestrucPrograComponent},
 {path: "censo",component:CensoComponent},
 {path:"censo-seguimiento",component:CensoSeguimientoComponent},
 {path:"censo-tablero",component:CensoTableroComponent},
 {path: "tabs-tablero", component:TabsTableroComponent,
  children:[
    {
      path:"tablero-reestructura", component:TableroReestructuraComponent
    },
    {
     path:'tablero-power', component:TableroPowerComponent
    },
  ],
},
{path: "formulario_pac",component:FormularioPacComponent},
{path: "integrador",component:IntegradorComponent},
{path: "tablero_pac",component:TableroComponent},

  {path: "indicedpp",component:IndiceDppComponent},
  { path: "kendoui", component:KendoComponent},
  { path: "catalogo_pp", component:CatalogoProgramasComponent},
  {path:"crece-formulario", component:CreceFormualarioComponent},
  {path:"directorio", component:DirectorioGpRComponent},
  {path:"avance-res", component:AvanceRestructuraComponent},
  {path: "prueba-firestore", component:PruebaFirebaseComponent},
  {path: "pf2023", component:Pf2023Component},


  { path: "chrtshigh", component:ChrtshighComponent},

  {path: '',   redirectTo: 'login2', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing:true,
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
