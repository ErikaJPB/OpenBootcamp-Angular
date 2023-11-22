import { Component, OnInit } from '@angular/core';

// Ejemplo basico de formulario reactivo
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  //Definimos nuestro formulario

  miFormulario: FormGroup = new FormGroup({});

  // Inyectamos la clase FormBuilder
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto.

    this.miFormulario = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',
    });

    // Nos vamos a suscribir a los cambios que ocurran en el formulario y los vamos a mostrar por consola.

    this.miFormulario.valueChanges.subscribe(console.log);
  }
}
