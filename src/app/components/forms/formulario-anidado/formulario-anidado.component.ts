import { Component, OnInit } from '@angular/core';

// Importamos de Reactive Forms para crear un formulario anidado
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss'],
})
export class FormularioAnidadoComponent implements OnInit {
  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Agrupacion para telefonos

    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    const telefonoMovil = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    // Agrupacion del formulario que contiene dos agrupaciones

    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil,
    });
  }
}
