import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client/client-list-page.component';
import { HomePage } from './pages/home/home-page.component';
import { PaiPageComponent } from './pages/pai/pai-page.component';
import { Child01PageComponent } from './components/child01/child01-page.component';
import { Child02PageComponent } from './components/child02/child02-page.component';
import { UserGuard } from './guards/user.guard';
import { ClienteDetalhePageComponent } from './pages/client-detalhe/client-detalhe-page.component';
import { RXJSPageComponent } from './pages/rxjs/rxjs-page.component';

const routes: Routes = [
  { path: 'clients', component: ClientListPage, canActivate: [UserGuard] },
  { path: '', component: HomePage },
  //Router do component pai, e dos filhos
  { path: 'pai',
    component: PaiPageComponent,
    children: [
      { path: 'child01', component: Child01PageComponent, canActivate: [UserGuard] },
      { path: 'child02', component: Child02PageComponent }
    ]
  },
  // Router dos detalhes de cliente com parametro id
  { path: 'client/detalhe/:id', component: ClienteDetalhePageComponent },

  { path: 'rxjs', component: RXJSPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
