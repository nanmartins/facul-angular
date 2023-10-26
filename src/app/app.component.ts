import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-class';
  descricao1 = 'Descricao';

  valor: {
    id: number,
    nome: string,
    descricao: string,
  } = {
    id: 1,
    nome: 'Nome',
    descricao: 'Descrição'
  };
}
