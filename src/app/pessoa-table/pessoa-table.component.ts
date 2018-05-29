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
    this.pessoaService.consultar()
      .subscribe(
        response => this.funcionarios = response
        /* response => console.log(response) */
      );
  }

}
