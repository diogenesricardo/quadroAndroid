import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PessoaService {

  constructor(private http: HttpClient) {}

  consultar() {
    return this.http.get<Array<any>>('http://localhost:8080/pessoas');
  }
/*   ultimoId = 1;
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
  } */



}
