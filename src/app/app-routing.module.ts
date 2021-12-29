import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Views/Administracion/usuarios/usuarios.component';
import { HomeComponent } from './Views/Home/home/home.component';
import { CreceComponent } from './Views/Planeacion/crece/crece.component';
import { CreceCuestionarioComponent } from './Views/Planeacion/crece-cuestionario/crece-cuestionario.component';
import { LoginComponent } from "./Views/login/login.component";
import { RegisterComponent } from "./Views/register/register.component";
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'crece', component:CreceComponent },
  { path: 'home', component:HomeComponent},
  { path: 'usuarios', component:UsuariosComponent},
  { path: 'crece_preguntas', component:CreceCuestionarioComponent},
  { path: "login", component: LoginComponent},
{ path: "register", component: RegisterComponent, pathMatch: "full" },
{path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
