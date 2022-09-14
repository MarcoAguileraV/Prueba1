import { Component , Input} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {


  @Input() public alumno !: Alumno;

  public fecha : Date = new Date();


}
