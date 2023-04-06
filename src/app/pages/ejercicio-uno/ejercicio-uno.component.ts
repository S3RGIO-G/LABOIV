import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css'],
})
export class EjercicioUnoComponent {
  title = 'PROMEDIO DE EDADES';
  edadUno: number = 0;
  edadDos: number = 0;
  sumaEdades: number = 0;
  promedioEdad: number = 0;
  errorMessage!: string;

  show = true;

  calcularPromedio() {
    if (
      isNaN(this.edadDos) ||
      isNaN(this.edadUno) ||
      !(this.edadUno > 17 && this.edadUno < 101) ||
      !(this.edadDos > 17 && this.edadDos < 101)
    ) {
      this.errorMessage = 'Debes ingresar edades validas (18 - 100)';
    } else {
      this.sumaEdades = Number(this.edadUno) + Number(this.edadDos);
      this.promedioEdad = this.sumaEdades / 2;
    }

    this.edadUno = 0;
    this.edadDos = 0;
  }

  resetValues() {
    this.errorMessage = '';
    this.promedioEdad = 0;
    this.sumaEdades = 0;
  }
}
