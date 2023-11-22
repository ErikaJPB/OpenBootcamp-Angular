import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArrayComponent } from './formulario-array.component';

describe('FormularioArrayComponent', () => {
  let component: FormularioArrayComponent;
  let fixture: ComponentFixture<FormularioArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioArrayComponent]
    });
    fixture = TestBed.createComponent(FormularioArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
