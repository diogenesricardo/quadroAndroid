import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoPessoaComponent } from './cartao-pessoa.component';

describe('CartaoPessoaComponent', () => {
  let component: CartaoPessoaComponent;
  let fixture: ComponentFixture<CartaoPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
