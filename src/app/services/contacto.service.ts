import { Injectable } from '@angular/core';

import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//Importamos observable de RXJS

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor() {}

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id: number): Observable<IContacto> | undefined {
    //Buscamos el contacto dentro de la lista de contactos mockeados
    const contacto = CONTACTOS.find((contacto) => contacto.id === id);

    // Creamos un observable para poder retornar el contacto

    let observable = new Observable<IContacto>((observer) => {
      observer.next(contacto); // Emitimos el valor a todo componente suscrito
      observer.complete(); // No se emiten mas valores
    });

    if (contacto) {
      return observable;
    } else {
      return;
    }
  }
}
