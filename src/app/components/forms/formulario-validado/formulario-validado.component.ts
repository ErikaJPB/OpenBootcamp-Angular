import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss'],
})
export class FormularioValidadoComponent implements OnInit {
  miFormularioValidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      // Campo ogligatorio
      nombre: ['', Validators.required],
      // Campo opcional
      apellidos: '',
      // Campo obligatorio debe ser mayor de 18 y menor de 99
      edad: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(99),
        ]),
      ],
      // Campo obligatorio y debe ser un email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // Campo obligatorio y con expresion regular
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
      ],
      // Campo booleano con check(true) como obligatorio
      acepta: [false, Validators.requiredTrue],
    });
  }

  get nombre() {
    return this.miFormularioValidado.get('nombre');
  }

  get apellidos() {
    return this.miFormularioValidado.get('apellidos');
  }

  get edad() {
    return this.miFormularioValidado.get('edad');
  }

  get email() {
    return this.miFormularioValidado.get('email');
  }

  get password() {
    return this.miFormularioValidado.get('password');
  }

  get acepta() {
    return this.miFormularioValidado.get('acepta');
  }

  //Metodo de submit del formulario

  enviarFormulario() {
    // Controlar que el formulario sea valido
    if (this.miFormularioValidado.valid) {
      console.table(this.miFormularioValidado.value);
      // Resetear el formulario
      this.miFormularioValidado.reset();
    }
  }
}
