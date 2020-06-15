import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationFormComponent} from "./application-form/application-form.component";


const routes: Routes = [
  {path: 'application-form', component: ApplicationFormComponent},
  {path: '', redirectTo: '/application-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
