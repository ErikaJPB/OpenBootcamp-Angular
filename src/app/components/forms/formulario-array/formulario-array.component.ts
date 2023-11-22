import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss'],
})
export class FormularioArrayComponent implements OnInit {
  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormularioArray = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      telefonos: this.formBuilder.array([]), // Inicializamos el array de la lista de telefonos vacío
    });
  }

  //Metodo getter para obtener el FormArray de la lista de telefonos
  get telefonosFormulario(): FormArray {
    return this.miFormularioArray.get('telefonos') as FormArray;
  }

  //Metodo para añadir un telefono al FormArray
  anadirTelefono() {
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    // Añadimos el telefono al FormArray

    this.telefonosFormulario.push(telefonoNuevo);
  }

  // Metodo para eliminar un telefono del FormArray

  eliminarTelefono(index: number) {
    this.telefonosFormulario.removeAt(index);
  }
}
