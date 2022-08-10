import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppComponent } from './app.component';
import { UsuariosComponent } from './Views/Administracion/usuarios/usuarios.component';
import { HomeComponent } from './Views/Home/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { CreceComponent } from './Views/Planeacion/crece/crece.component';
import { CreceCuestionarioComponent } from './Views/Planeacion/crece-cuestionario/crece-cuestionario.component';
import { RegisterComponent } from './Views/register/register.component';
import { CarruselComponent } from './Views/Home/carrusel/carrusel.component';
import { PieComponent } from './Views/Home/pie/pie.component';
import { PruebaspdfComponent } from './Views/Administracion/pruebaspdf/pruebaspdf.component';
import { KendoComponent } from './Views/Administracion/kendo/kendo.component';
import { CatalogoProgramasComponent } from './Views/Administracion/catalogo-programas/catalogo-programas.component';
import { ChrtshighComponent } from './Views/Administracion/highcharts/chrtshigh.component';
import { Login2Component } from './Views/Administracion/login2/login2.component';
import { PruebaExcelComponent } from './Views/Administracion/prueba-excel/prueba-excel.component';
import { NuevoCuestionarioComponent } from './Views/Administracion/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import{PasoUnoComponent} from './Views/Administracion/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component'
import{PasoDosComponent} from './Views/Administracion/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component'
import{NuevaPreguntaComponent} from './Views/Administracion/cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component'
import { CreceRespuestasComponent } from './Views/Planeacion/crece-respuestas/crece-respuestas.component';

import { CreceMonitorAvanceComponent } from './Views/Planeacion/crece-monitor-avance/crece-monitor-avance.component';
import { CreceInformeComponent } from './Views/Planeacion/crece-informe/crece-informe.component';
import { PresentacionComponent } from './Views/Reestructura/presentacion/presentacion.component';
import { RestrucAdminComponent } from './Views/Reestructura/restruc-admin/restruc-admin.component';
import { RestrucPrograComponent } from './Views/Reestructura/restruc-progra/restruc-progra.component';
import { FormatoComponent } from './Views/Reestructura/formato/formato.component';
import { TableroReestructuraComponent } from './Views/Reestructura/tablero-reestructura/tablero-reestructura.component';
import { TabsTableroComponent } from './Views/Reestructura/tabs-tablero/tabs-tablero.component';
import { TableroPowerComponent } from './Views/Reestructura/tabs-tablero/tablero-power/tablero-power.component';
import { IndiceDppComponent } from './Views/IndiceDpp/indice-dpp/indice-dpp.component';
import { TableroComponent } from './Views/Capacitacion/tablero/tablero.component';
import { IntegradorComponent } from './Views/Capacitacion/integrador/integrador.component';
import { FormularioPacComponent } from './Views/Capacitacion/formulario-pac/formulario-pac.component';
import { CensoComponent } from './Views/CensoGpR/censo/censo.component';
import { CensoSeguimientoComponent } from './Views/CensoGpR/censo-seguimiento/censo-seguimiento.component';
import { CensoTableroComponent } from './Views/CensoGpR/censo-tablero/censo-tablero.component';
import { DownloadUploadService } from './services/download-upload.service';
import { DownloadComponent } from './Views/Planeacion/crece-informe/download/download.component';
import { UploadComponent } from './Views/Planeacion/crece-informe/upload/upload.component';
import { CreceFormualarioComponent } from './Views/Planeacion/crece-formulario/crece-formualario.component';
import { DirectorioGpRComponent } from './Views/CensoGpR/directorio-gp-r/directorio-gp-r.component';
import { AvanceRestructuraComponent } from './Views/Reestructura/avance-restructura/avance-restructura.component';

//Interceptors
import {AddTokenInterceptor} from '../app/helpers/add-token.interceptor'
//Librerias y Deendencias
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CuestionariosComponent } from './Views/Administracion/cuestionarios/cuestionarios.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CookieService } from 'ngx-cookie-service';
import { JwtModule } from "@auth0/angular-jwt";

//import { NotFoundComponent } from './error-pages/not-found/not-found.component';
//Kendo ui
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule, PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { PruebaFirebaseComponent } from './Views/Administracion/prueba-firebase/prueba-firebase.component';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//importamos la configuracion de  firebase
import { environment } from 'src/environments/environment';
import { LinksService } from './services/links.service';
import { Pf2023Component } from './Views/PaqueteFiscal2023/pf2023/pf2023.component';
import { GoogleMapsComponent } from './Views/Administracion/google-maps/google-maps.component';
//GoogleMaps
import { GoogleMapsModule } from '@angular/google-maps';
import { PaisesComponent } from './Views/Administracion/Mapas/paises/paises.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}







@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    LoginComponent,
    CreceComponent,
    CreceCuestionarioComponent,
    RegisterComponent,
    CuestionariosComponent,
    LoadingComponent,
    CarruselComponent,
    PieComponent,
    PruebaspdfComponent,
    KendoComponent,
    CatalogoProgramasComponent,
    ChrtshighComponent,
    Login2Component,
    PruebaExcelComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    CreceRespuestasComponent,
    CreceMonitorAvanceComponent,
    CreceInformeComponent,
    PresentacionComponent,
    RestrucAdminComponent,
    RestrucPrograComponent,
    FormatoComponent,
    TableroReestructuraComponent,
    TabsTableroComponent,
    TableroPowerComponent,
    IndiceDppComponent,
    TableroComponent,
    IntegradorComponent,
    FormularioPacComponent,
    CensoComponent,
    CensoSeguimientoComponent,
    CensoTableroComponent,
    DownloadComponent,
    UploadComponent,
    CreceFormualarioComponent,
    DirectorioGpRComponent,
    AvanceRestructuraComponent,
    PruebaFirebaseComponent,
    Pf2023Component,
    GoogleMapsComponent,
    PaisesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    PdfViewerModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    ButtonsModule,
    IconsModule,
    AngularFireModule.initializeApp(environment.firebaseDb),
    AngularFireDatabaseModule,
    LabelModule,
    InputsModule,
    LayoutModule,
    FloatingLabelModule,
    DateInputsModule,
    TooltipsModule,
    IntlModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:80"],
        disallowedRoutes: []
      }
    })

  ],



  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    DownloadUploadService,
    CookieService,LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
