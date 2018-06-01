import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PessoaService {

  constructor(private http: HttpClient) {}

  consultar() {
    return this.http.get<Array<any>>('http://localhost:8080/pessoas');
  }

  adicionar(nome: any): Observable<any> {
    return this.http.post('http://localhost:8080/pessoas', nome);
  }

  excluir(id: number) {
    return this.http.delete(`http://localhost:8080/pessoas/${id}`);
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
