import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-client-detalhE',
  templateUrl: './client-detalhe-page.component.html',
})

export class ClienteDetalhePageComponent implements OnInit {
  cliente = {
    nome: '',
    id: ''
  }

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    // const nome = this.activeRoute.snapshot.paramMap.get('nome');
    if(id) {
      this.cliente = {
        id: id,
        nome: 'nome nao esta sendo importado como parametro',
      }
    }
  }
}
