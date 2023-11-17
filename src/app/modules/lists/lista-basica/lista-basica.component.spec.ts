import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBasicaComponent } from './lista-basica.component';

describe('ListaBasicaComponent', () => {
  let component: ListaBasicaComponent;
  let fixture: ComponentFixture<ListaBasicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBasicaComponent]
    });
    fixture = TestBed.createComponent(ListaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
