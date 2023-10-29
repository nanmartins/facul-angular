import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
