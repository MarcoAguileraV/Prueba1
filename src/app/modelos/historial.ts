import { Alumno } from "./alumno";


export type TipoAlumno = Alumno;
export interface Historial {

  alumnosHistorial : TipoAlumno
  fecha : Date

}
