import { Persona } from '@core/models/persona';
import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.scss']
})
export class ModificarPersonaComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<ModificarPersonaComponent>,
  ) { }

  ngOnInit(): void {
    // console.log(this.data);
  }
  
  nuevaInformacionPersona(personaModificada: Persona) {
    // console.log(personaModificada)
    this.bottomSheetRef.dismiss(personaModificada);
  }
}
