import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioValidadoComponent } from './formulario-validado.component';

describe('FormularioValidadoComponent', () => {
  let component: FormularioValidadoComponent;
  let fixture: ComponentFixture<FormularioValidadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioValidadoComponent]
    });
    fixture = TestBed.createComponent(FormularioValidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
