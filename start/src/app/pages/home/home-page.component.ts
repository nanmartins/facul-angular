import { Component } from "@angular/core";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})

export class HomePage {
  descricao1 = 'Single way data bind!';

  valor: {
    id: number,
    nome: string,
    descricao: string,
  } = {
    id: 1,
    nome: 'Two ways',
    descricao: 'Databind'
  };
}
