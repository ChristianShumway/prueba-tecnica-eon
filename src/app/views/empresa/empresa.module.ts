import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { TarjetaPresentacionComponent } from './components/tarjeta-presentacion/tarjeta-presentacion.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { ModificarPersonaComponent } from './components/modificar-persona/modificar-persona.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    TarjetaPresentacionComponent,
    FormularioPersonaComponent,
    ModificarPersonaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    // FormularioPersonaComponent
  ]
})
export class EmpresaModule { }
