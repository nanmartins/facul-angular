import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from '../app/pages/client-list-page.component';
import { HomePage } from './pages/home/home-page.component';

const routes: Routes = [
  { path: 'client', component: ClientListPage },
  { path: '', component: HomePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
