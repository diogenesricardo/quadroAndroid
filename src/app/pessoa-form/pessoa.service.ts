import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {

  ultimoId = 1;
  funcionarios = [{ id: 1, nome: 'Saulo' }];

  adicionar(nome) {
    const funcionario = {
      id: ++this.ultimoId,
      nome: nome
    };

    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));
  }

  consultar() {
    return this.funcionarios;
  }



}
