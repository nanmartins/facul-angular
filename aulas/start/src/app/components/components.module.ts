import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.components";
import { HomePage } from "../pages/home/home-page.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClientListPage } from "../pages/client-list-page.component";
import { CustomUppercasePipe } from "../pipes/custom-uppercase.pipe";

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
    CustomUppercasePipe
  ],
  exports: [
    HeaderComponent,
    HomePage
  ]
})

export class ComponentsModule {

}
