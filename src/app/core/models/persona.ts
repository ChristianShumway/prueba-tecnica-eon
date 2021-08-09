import { Direccion } from "./direccion";

export interface Persona {
  id?: number;
  nombre: string;
  edad: number;
  frase: string;
  direccion?: Direccion;
  imagen?: string;
}
