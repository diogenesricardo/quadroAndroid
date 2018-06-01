import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoaService } from './pessoa.service';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

  funcionarios: Array<any>;

  @Output() enviarFuncionario = new EventEmitter();

  constructor(private pessoaService: PessoaService) { }

  adicionar(nome) {
    this.pessoaService.adicionar({nome})
      .subscribe(response => {
        this.pessoaService.consultar()
          .subscribe(responseConsult => {
            this.funcionarios = responseConsult;
            this.enviarFuncionario.emit(this.funcionarios);
            console.log('Adicionado com sucesso');
          });
        });
  }



  /* adicionar(nome: string) {
    this.pessoaService.adicionar(nome);
  } */
}
