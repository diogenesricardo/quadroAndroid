import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../pessoa-form/pessoa.service';

@Component({
  selector: 'app-cartao-pessoa',
  templateUrl: './cartao-pessoa.component.html',
  styleUrls: ['./cartao-pessoa.component.css']
})
export class CartaoPessoaComponent implements OnInit {

  @Input() funcionarios = [];

  getEstilosCartao(pessoa) {
      return {
       'border-width.px': pessoa.id,
       backgroundColor: pessoa.id % 2 === 0
         ? 'LightPink' : 'LightSkyBlue 	'
    };
  }

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.funcionarios = this.pessoaService.consultar();
  }

}
