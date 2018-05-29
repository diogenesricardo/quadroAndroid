import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoaService } from './pessoa.service';


@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  constructor(private pessoaService: PessoaService) { }
  adicionar(nome: string) {
    this.pessoaService.adicionar(nome);
  }
}
