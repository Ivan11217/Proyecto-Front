import { Injectable } from '@angular/core';
import { Foto } from '../interfaz/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private fotos: Foto[] = [
    { ruta: '/assets/galeria/londres.jpg', nombre: 'Londres, Reino Unido'},
    { ruta: '/assets/galeria/barcelona.jpg', nombre: 'barcelona, España'},
    { ruta: '/assets/galeria/ny.jpg', nombre: 'Nueva York, Estados Unidos'},

    { ruta: '/assets/galeria/roma.jpg', nombre: 'Roma, Italia'},
    { ruta: '/assets/galeria/toronto.jpg', nombre: 'Toronto, Canada'},
    { ruta: '/assets/galeria/luxor.jpg', nombre: 'Luxor, Egipto'},
    
    { ruta: '/assets/galeria/nyhavn.jpg', nombre: 'Nyhavn, Dinamarca'},
    { ruta: '/assets/galeria/bergen.jpg', nombre: 'Bergen, Noruega'},
    { ruta: '/assets/galeria/hamburgo.jpg', nombre: 'Hamburgo, Alemania'},
  ]
  constructor() { }
  
  obtenerDatos(){
    return this.fotos;
  }
}


