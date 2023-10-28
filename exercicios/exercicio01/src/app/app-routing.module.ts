import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloFilhoModule } from './modulo-filho.module';

const routes: Routes = [
  {
    path: 'modulo-filho',
    loadChildren: () => ModuloFilhoModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
