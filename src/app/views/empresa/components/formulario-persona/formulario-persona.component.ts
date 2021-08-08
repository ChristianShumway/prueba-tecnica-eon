import { Component, OnInit, ViewChild, Inject, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Persona } from '@core/models/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  form!: FormGroup;
  loading: boolean = false;
  @ViewChild(MatButton, {static: false}) submitButton!: MatButton;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  @Input() accion!: string;
  @Input() personaModificar!: Persona;
  @Output() nuevoUsuarioClick: EventEmitter<Persona> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validaciones();
    // console.log(this.accion);
    // console.log(this.personaModificar);
    if(this.accion === 'modificacion') {
      this.form.patchValue(this.personaModificar);
    }
  }

  validaciones() {
    this.form = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      edad: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      frase: ['', [
        Validators.required
      ]]
    });
  }

  get f(){
    return this.form.controls;
  }

  accionPersona(){
    if(this.form.valid) {
      this.submitButton.disabled = true;
      let value;
      if(this.accion === 'alta') {
        value = {
          ...this.form.value,
          edad: parseInt(this.form.value.edad)
        };
      } else {
        value = {
          ...this.form.value,
          id: this.personaModificar.id,
          edad: parseInt(this.form.value.edad),
          direccion: this.personaModificar.direccion
        }
      }

      this.nuevoUsuarioClick.emit(value);
      this.submitButton.disabled = false;
      setTimeout(() => this.formGroupDirective.resetForm(), 0);
    }
  }

}
