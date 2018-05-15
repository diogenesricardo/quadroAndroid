import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartaoPessoaComponent } from './cartao-pessoa/cartao-pessoa.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoPessoaComponent,
    PessoaFormComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
