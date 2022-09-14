import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent  {

  @Input() alumnos !: Array<Alumno>;

  public fecha : Date = new Date();

}
