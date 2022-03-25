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
//Interceptors
import {AddTokenInterceptor} from '../app/helpers/add-token.interceptor'
//Librerias y Deendencias
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CuestionariosComponent } from './Views/Administracion/cuestionarios/cuestionarios.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule, PDFModule,ExcelModule } from '@progress/kendo-angular-grid';
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
import { CookieService } from 'ngx-cookie-service';
import { FormularioPacComponent } from './Views/Capacitacion/formulario-pac/formulario-pac.component';
import { IntegradorComponent } from './Views/Capacitacion/integrador/integrador.component';








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
    FormularioPacComponent,
    IntegradorComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PdfViewerModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
