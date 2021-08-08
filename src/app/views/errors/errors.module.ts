import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';

import { ErrorsRoutingModule } from './errors-routing.module';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    MaterialModule
  ]
})
export class ErrorsModule { }
