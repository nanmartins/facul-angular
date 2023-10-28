import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Filho1Component } from "./components/Filho1/filho-1.component";
import { Filho2Component } from "./components/Filho2/filho-2.component";

const routes: Routes = [
  { path: 'filho1', component: Filho1Component },
  { path: 'filho2', component: Filho2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloFilhoModule { }
