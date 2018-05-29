import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartaoPessoaComponent } from './cartao-pessoa/cartao-pessoa.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PessoaService } from './pessoa-form/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    CartaoPessoaComponent,
    PessoaFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
