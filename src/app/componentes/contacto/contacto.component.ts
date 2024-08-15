import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      const url = 'http://localhost:5000/usuario';

      this.http.post(url, this.contactoForm.value).subscribe(
        (response) => {
          console.log('Formulario enviado con éxito', response);
        },
        (error) => {
          console.error('Error al enviar el formulario', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }
}
