import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
