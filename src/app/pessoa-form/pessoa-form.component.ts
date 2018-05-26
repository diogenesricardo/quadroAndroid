import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoaService } from './pessoa.service';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

  pessoaService: PessoaService;

  constructor() {
    this.pessoaService = new PessoaService();
  }

  adicionar(nome: string) {
    this.pessoaService.adicionar(nome);
  }

}
