import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalEliminarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalEliminarComponent,
    LoadingComponent
  ],
  entryComponents: [
    ModalEliminarComponent
  ]
})
export class SharedModule { }
