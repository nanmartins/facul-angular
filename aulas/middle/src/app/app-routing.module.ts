import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoasPageComponent } from './pages/lista-pessoas/lista-pessoas-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { UserPageComponent } from './pages/user/user-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pessoas', component: ListaPessoasPageComponent },
  { path: 'user', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
