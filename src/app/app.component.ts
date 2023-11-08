import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World';
  // name = 'Erika';
  user = 'erikajpb';

  // Esta funcion se ejecuta cuando en el hijo se pulse un boton
  recibirMensajeDelHijo(evento: string): void {
    alert(evento);
  }
}
