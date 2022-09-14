
import { Seccion } from "./seccion";


export type TipoSeccion = '005D' | '006D' | '007D' | '008D';
export interface Alumno {

  idPk? :  number,
  rut : string,
  nombre:  string,
  apellido : string,
  edad : number,
  seccion : TipoSeccion


}
