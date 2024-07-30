import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MateriaComponent } from './materia/materia.component';
import { HomeComponent } from './home/home.component';
//rutas home - estudiantes - materias - Gestion
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  
//estudiantes

{ path: 'estudiantes', component: EstudianteComponent },

//materia
{ path: 'materia', component: MateriaComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: '**', redirectTo: 'home', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
