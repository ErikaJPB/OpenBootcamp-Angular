import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Importamos el modulo HttpClientModule para hacer peticiones HTTP.

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';

//Modulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

// Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs); // Registramos el LOCALE_ID de 'es' / si no se registra aparecera un error y pantalla en blanco.
// Ahora las fechas ya apareceran en espanol por ejemplo y no en ingles.

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule,
    //Importamos el modulo HttpClientModule para hacer peticiones HTTP.
    HttpClientModule,

    BrowserAnimationsModule,
    // Importamos el modulo ReactiveFormsModule para trabajar con formularios reactivos.
    ReactiveFormsModule,

    // Importamos los modulos de Angular Material que usamos en el formulario.
    MatFormFieldModule,
  ],
  providers: [
    // Registramos el locale de ES para que los pipes sean en Espanol.
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
