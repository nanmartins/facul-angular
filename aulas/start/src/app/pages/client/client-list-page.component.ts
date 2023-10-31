import { Component } from "@angular/core";
import { ClientService } from "../../services/client.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.css']
})

export class ClientListPage {
  clientePremium = false

  nome = 'Renan Martins'

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

  data = new Date()
  moeda = 10.50

  constructor(private clientService: ClientService) {}

  sayHello() {
    alert(this.clientService.sayHello())
  }
}
