import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ListaPessoasPageComponent } from './pages/lista-pessoas/lista-pessoas-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PessoaService } from './services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './pages/user/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPessoasPageComponent,
    HomePageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
