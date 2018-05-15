import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-pessoa',
  templateUrl: './cartao-pessoa.component.html',
  styleUrls: ['./cartao-pessoa.component.css']
})
export class CartaoPessoaComponent {

  @Input() funcionarios = [];

  getEstilosCartao(funcionario) {
      return {
       'border-width.px': funcionario.id,
       backgroundColor: funcionario.id % 2 === 0
         ? 'LightPink' : 'LightSkyBlue 	'
    };
  }

}
