import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path: 'cuestionarios', component:CuestionariosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  { path: 'crece', component:CreceComponent },
  { path: 'home', component:HomeComponent},
  { path: 'crece_preguntas', component:CreceCuestionarioComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "carrusel", component:CarruselComponent },
  { path: "pruebaspdf", component:PruebaspdfComponent},
  {path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
