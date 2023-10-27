import { Component } from "@angular/core";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.css']
})

export class ClientListPage {
  clientePremium = false

  nome = ''

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

  adicionar() {
    let count = this.clientes.length;
    this.clientes.push({ nome: this.nome, id: count + 1 });
  }
}