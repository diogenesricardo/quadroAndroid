import { PessoaService } from './../pessoa-form/pessoa.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-table',
  templateUrl: './pessoa-table.component.html',
  styleUrls: ['./pessoa-table.component.css']
})
export class PessoaTableComponent implements OnInit {

  @Input() funcionarios: Array<any>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.consultar();
  }

  excluir(id: number) {
    console.log(id);
    this.pessoaService.excluir(id)
      .subscribe(() => {
        console.log('Atualizado com sucesso');
        this.consultar();
      });
  }

  atualizar(funcionario: any) {
    console.log(funcionario);
    this.pessoaService.alterar(funcionario).subscribe(
      () => {
        console.log('Atualizado com sucesso');
        this.consultar();
      }
    );
  }

  consultar() {
    this.pessoaService.consultar()
    .subscribe(
      response => this.funcionarios = response
      /* response => console.log(response) */
    );
  }

}
