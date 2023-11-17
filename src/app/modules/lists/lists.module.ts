import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';

@NgModule({
  declarations: [ListaBasicaComponent],
  imports: [CommonModule],
  exports: [
    //Exportamos aquellas clases (components, pipes, services etc) que queremos que sean accesibles desde fuera del módulo
    ListaBasicaComponent,
  ],
})
export class ListsModule {}
