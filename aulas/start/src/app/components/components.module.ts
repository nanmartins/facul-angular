import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.components";
import { HomePage } from "../pages/home/home-page.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClientListPage } from "../pages/client/client-list-page.component";
import { CustomUppercasePipe } from "../pipes/custom-uppercase.pipe";
import { PaiPageComponent } from "../pages/pai/pai-page.component";
import { Child01PageComponent } from "./child01/child01-page.component";
import { Child02PageComponent } from "./child02/child02-page.component";
import { ClienteDetalhePageComponent } from "../pages/client-detalhe/client-detalhe-page.component";

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HomePage,
    ClientListPage,
    PaiPageComponent,
    Child01PageComponent,
    Child02PageComponent,
    CustomUppercasePipe,
    ClienteDetalhePageComponent
  ],
  exports: [
    HeaderComponent,
    HomePage
  ]
})

export class ComponentsModule {

}
