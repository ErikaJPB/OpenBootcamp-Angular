import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss'],
})
export class EjemploPipesComponent implements OnInit {
  dob: Date = new Date(1990, 9, 15);
  cambio: boolean = true;
  nombre: string = 'Erika';
  numero_PI: number = 3.141592653589793;
  precioCarrito: number = 100;

  persona: IContacto = {
    id: 1,
    nombre: 'Erika',
    apellidos: 'Pineda',
    edad: 30,
    email: 'erika@gmail.com',
  };
  cantidad: number = 0.3512;
  textoLargo: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

  //Ejemplo para Pipe calcular puntuacion

  jugador1: IJugador = {
    nombre: 'Erika',
    puntos: [10, 30, 40, 0],
  };
  jugador2: IJugador = {
    nombre: 'Juan',
    puntos: [0, 80, 10, 5],
  };

  constructor() {}

  ngOnInit(): void {}

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
