import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Tus componentes aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule // Importa ReactiveFormsModule aquí
  ],
  providers: [],
  bootstrap: [/* Tu componente principal aquí */]
})
export class AppModule { }
