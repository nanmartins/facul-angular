import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client/client-list-page.component';
import { HomePage } from './pages/home/home-page.component';
import { PaiPageComponent } from './pages/pai/pai-page.component';
import { Child01PageComponent } from './pages/child01/child01-page.component';
import { Child02PageComponent } from './pages/child02/child02-page.component';

const routes: Routes = [
  { path: 'client', component: ClientListPage },
  { path: '', component: HomePage},
  //Router do component pai, e dos filhos
  { path: 'pai',
    component: PaiPageComponent,
    children: [
      { path: 'child01', component: Child01PageComponent },
      { path: 'child02', component: Child02PageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
