import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje';

export const routes: Routes = [
  { path: 'agregar-personaje', component: AgregarPersonajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
