import { Component } from "@angular/core";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.css']
})

export class ClientListPage {
  clientePremium = false;
  clientes = [
    {
      nome: 'Cliente 1',
      id: 1
    },
    {
      nome: 'Cliente 2',
      id: 2
    }
  ]
}
