import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '@core/models/persona';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.scss']
})
export class TarjetaPresentacionComponent implements OnInit {

  @Input() persona!: Persona;
  @Output() personaModificar: EventEmitter<Persona> = new EventEmitter();
  @Output() personaEliminar: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modificarPersona(persona: Persona) {
    this.personaModificar.emit(persona);
  }

  eliminarPersona(idPersona: any) {
    this.personaEliminar.emit(idPersona);
  }

}
