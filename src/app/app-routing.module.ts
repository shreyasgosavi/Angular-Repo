import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationsComponent } from './sample-module/form-validations/form-validations.component';

const routes: Routes = [

  { path : 'form', component: FormValidationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
