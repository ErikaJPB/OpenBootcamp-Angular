import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss'],
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  //Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //suscripcion de servicio
  subscription: Subscription | undefined;

  //Inyectamos en el constructor el servicio de Contactos
  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    //Obtenemos los contactos del servicio

    this.contactoService
      .obtenerContactos()
      .then((lista) => (this.listaContactos = lista))
      .catch((error) =>
        console.error(
          `Ha habido un error al recuperar los contactos : ${error}`
        )
      )
      .finally(() => console.log(`Peticion de lista de contactos terminada`));
  }

  obtenerContacto(id: number) {
    //Obtenemos el contacto del servicio
    this.subscription = this.contactoService
      .obtenerContactoPorId(id)
      ?.subscribe(
        (contacto: IContacto) => (this.contactoSeleccionado = contacto)
      );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
