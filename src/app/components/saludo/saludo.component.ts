import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string = 'anonimo';
  @Output() mensajeEmmiter = new EventEmitter<string>();

  myStyle: object = {
    color: 'red',
    backgroundColor: 'yellow',
    fontzise: '30px',
    fontweight: 'bold',
  };

  constructor() {}

  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente

    console.log('ngOnInit del componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambio: Valor anterior: ', changes['name'].previousValue),
      console.log('Cambio: Valor actual: ', changes['name'].currentValue);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer');
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre

  enviarMensajeAlPadre(): void {
    // alert(`Hola ${this.name}. Alerta activada desde el click del boton`);
    this.mensajeEmmiter.emit(
      `Hola ${this.name}. Alerta activada desde el click del boton`
    );
  }
}

//Orden de ejecucion de los metodos del ciclo de vida de un componente

// * 1. ngOnChanges
// * 2. ngOnInit
// 3. ngAfterContentInit
// 4. ngAfterContentChecked
// 5. ngAfterViewInit
// 6. ngAfterViewChecked
// 7. ngAfterContentChecked
// 8. ngAfterViewChecked
// * 9. ngOnDestroy
