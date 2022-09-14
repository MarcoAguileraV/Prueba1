import { Component , Output,EventEmitter} from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {

  @Output() public rescates = new EventEmitter<Seccion>();

  public seccion : Seccion ={

    idPk : 1,
    seccion : "",
  }

  public guardarSeccion(event : Event) : void{

    const responsable = event.target as HTMLInputElement;
    this.seccion.seccion = responsable.value;

  }

  public guardarSecciones() : void {

    const copia : Seccion = {...this.seccion};

    this.rescates.emit(copia);


    this.seccion.seccion = ""


  }

}
