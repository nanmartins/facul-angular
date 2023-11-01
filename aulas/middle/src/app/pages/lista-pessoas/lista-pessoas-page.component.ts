import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../../model/pessoa";
import { PessoaService } from "src/app/services/pessoa.service";


@Component({
  selector: "app-lista-pessoas-page",
  templateUrl: "./lista-pessoas-page.component.html",
})

export class ListaPessoasPageComponent implements OnInit {

  pessoas!: Observable<Pessoa[]>

  constructor(private service: PessoaService) {}

  ngOnInit() {  }

  salvar(pessoa: Pessoa) {
    this.service.salvar(pessoa)
  }

  listar() {
    this.pessoas = this.service.listar()
  }

}
