import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interfaz/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RecursosService],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) { }
  ngOnInit(): void {
    this.fotos = this.recursosService.obtenerDatos();
  }
}
