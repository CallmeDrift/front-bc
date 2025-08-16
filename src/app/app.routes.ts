import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCharactersComponent } from './add-characters/add-characters';

export const routes: Routes = [
  { path: 'addcharacter', component: AddCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
