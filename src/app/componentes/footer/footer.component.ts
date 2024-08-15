import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  titulo:string="Contactos"
  medios:any[] = [
    {"nombre":"Facebook",
      "url":"https://www.facebook.com/",
      "icono":"/assets/facebook.svg",
    },
    {"nombre":"Instagram",
      "url":"https://www.instagram.com/",
      "icono":"/assets/instagram.svg",
    },
    {"nombre":"Youtube",
      "url":"https://youtu.be/REDVbTQxMXo?si=zRuKnUL_i3zx4hCB",
      "icono":"/assets/youtube.svg"
    },
    ]
}