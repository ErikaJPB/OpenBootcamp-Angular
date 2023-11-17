import { Component } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
};

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss'],
})
export class ListaBasicaComponent {
  listaDeElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 4000,
      descripcion: 'Leche descremada',
    },
    {
      nombre: 'Pan',
      precio: 7000,
      descripcion: 'Pan lactal',
    },
    {
      nombre: 'Yogurt',
      precio: 2500,
      descripcion: 'Yogurt bebible',
    },
    {
      nombre: 'Cafe',
      precio: 17000,
      descripcion: 'Cafe instantaneo',
    },
  ];

  cargando: boolean = true;

  opcion: number = 0;

  constructor() {}

  ngOnInit(): void {}

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOp(opcionEscogida: number) {
    this.opcion = opcionEscogida;
  } // implica un cambio en los elementos renderizados
}
