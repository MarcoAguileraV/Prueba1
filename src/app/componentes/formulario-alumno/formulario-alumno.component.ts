import { DatePipe } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { Alumno, TipoSeccion } from 'src/app/modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {

  @Output() public rescate = new EventEmitter<Alumno>();

  public seccion : Seccion = {

    idPk : 1,
    seccion : ""
  }

  public alumno : Alumno = {

    rut : "",
    nombre : "",
    apellido : "",
    edad :  0 ,
    seccion : "005D",



  }

  public guardarRut(event : Event) : void{
    const responsable = event.target as HTMLInputElement;
    this.alumno.rut = responsable.value;
  }

  public guardarNombre(event : Event): void {
    const responsable = event.target as HTMLInputElement;
    this.alumno.nombre = responsable.value;

  }

  public guardarApellido(event : Event) : void {
    const responsable = event.target as HTMLInputElement;
    this.alumno.apellido = responsable.value;
  }

  public guardarEdad(event : Event) : void {
    const responsable = event.target as HTMLInputElement;
    this.alumno.edad = parseInt(responsable.value);
  }

  public guardarSeccion(event : Event) : void {
    const responsable = event.target as HTMLSelectElement;
    this.alumno.seccion = responsable.value as TipoSeccion;

  }



  public guardarAlumno() : void {

    const copia : Alumno = {...this.alumno};

    this.rescate.emit(copia);


    this.alumno.rut = "",
    this.alumno.nombre = "",
    this.alumno.apellido = "",
    this.alumno.edad = 0,
    this.alumno.seccion = "005D"


  }

}
