import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.components";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class ComponentsModule {

}
