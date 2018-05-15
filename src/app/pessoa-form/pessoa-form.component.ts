import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

  nome = 'Diogenes';
  adicionado = false;
  funcionarios = [];
  id = 0;
  @Output() enviarPessoa = new EventEmitter();

  adicionar(nome: string) {
    this.nome = nome;
    this.adicionado = true;
    
    this.funcionarios.push({
      id: this.id++,
      nome : this.nome
    });

    this.enviarPessoa.emit(this.funcionarios);

  }

}
