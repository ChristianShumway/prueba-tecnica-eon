import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonaService } from '@core/services/persona/persona.service';
import { Persona } from '@core/models/persona';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ModificarPersonaComponent } from './../modificar-persona/modificar-persona.component';
import { ModalEliminarComponent } from '@shared/components/modal-eliminar/modal-eliminar.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EnterTop, EnterRight, EnterBottom, EnterLeft, EnterNoMove,  } from './../../../../utils/animations-intro';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  animations: [ EnterTop, EnterBottom, EnterLeft, EnterRight, EnterNoMove]
})

export class EmpresaComponent implements OnInit, OnDestroy  {

  // public personas: Persona[] = [];
  accion = 'alta';
  dataSourcePersonas$!: Observable<Persona[]>;
  panelOpenState = false;

  constructor(
    private personaService: PersonaService,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    // this.personas = this.personaService.getPersonas();
    // SE MODIFICA EL SERVICIO PARA AHORA TENER UN OBSERVABLE
    this.dataSourcePersonas$ = this.personaService.personal$
  }

  // METODO PARA AGREGAR UNA NUEVA PERSONA
  agregarNuevaPersona(persona: Persona) {
    this.personaService.addPersona(persona);
    this.useAlerts('Persona agregada exitosamente', ' ', 'success-dialog');
    this.panelOpenState = !this.panelOpenState;
    // this.getPersonas();
  }

  // METODO PARA MODIFICAR PERSONA
  cualPersonaModifico(persona: Persona): void {
    let sheet = this.bottomSheet.open(ModificarPersonaComponent, {
      data: { 
        tipo: 'modificacion',
        persona
      }
    });

    sheet.afterDismissed().subscribe((response) => { 
      this.personaService.editPersona(response);
      this.useAlerts('Persona modificada exitosamente', ' ', 'success-dialog');
    });
  }

  // METODO PARA ELIMINAR PERSONA
  cualPersonaElimino(idPersona: number) {
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      panelClass: 'custom-dialog-container-delete',
      data: idPersona
    });

    dialogRef.afterClosed().subscribe(response => { 
      if(response) {
        this.personaService.deletePersona(idPersona);
        this.useAlerts('Persona eliminada exitosamente', ' ', 'success-dialog');
      }
    });
  }

  ngOnDestroy() {
  }

  useAlerts(message: string, action: any, className: string){
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [className]
    });
  }


}
