import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UsuariosComponent } from './Views/Administracion/usuarios/usuarios.component';
import { HomeComponent } from './Views/Home/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { CreceComponent } from './Views/Planeacion/crece/crece.component';
import { CreceCuestionarioComponent } from './Views/Planeacion/crece-cuestionario/crece-cuestionario.component';
import { RegisterComponent } from './Views/register/register.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CuestionariosComponent } from './Views/Administracion/cuestionarios/cuestionarios.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CarruselComponent } from './Views/Home/carrusel/carrusel.component';
import { PieComponent } from './Views/Home/pie/pie.component';

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

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
