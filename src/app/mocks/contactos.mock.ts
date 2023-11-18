import { IContacto } from '../models/contacto.interface';

//Exportamos una lista simulada de contactos

export const CONTACTOS: IContacto[] = [
  {
    id: 0,
    nombre: 'Juan',
    apellidos: 'García Pérez',
    email: 'juan1@gmail.com',
    edad: 20,
  },
  {
    id: 1,
    nombre: 'Pedro',
    apellidos: 'Rodriguez Lopez',
    email: 'pedro@gmail.com',
    edad: 25,
  },

  {
    id: 2,
    nombre: 'Luis',
    apellidos: 'Mendoza Castro',
    email: 'luis@gmail.com',
    edad: 30,
  },
];
