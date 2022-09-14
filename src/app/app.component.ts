import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';
  public fecha : Date = new Date();

  public listaAlumno : Array<Alumno> = [


    {
      rut : "20595780-4",
      nombre : "Marco",
      apellido : "Aguilera",
      edad : 21 ,
      seccion : '005D'

    }

  ]

  public guardarAlumno(nuevo : Alumno) : void{
    const id = this.listaAlumno.length + 1;
    nuevo.idPk = id;
    this.listaAlumno.push(nuevo);
  }
}
