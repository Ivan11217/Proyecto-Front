import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, 
    HeaderComponent, FooterComponent, 
    InformacionComponent, ContactoComponent, InicioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectP1';
}
