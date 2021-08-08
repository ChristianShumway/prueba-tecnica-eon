import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { PostsRoutingModule } from './posts-routing.module';
import { TablePostComponent } from './components/table-post/table-post.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ComentariosPostComponent } from './components/comentarios-post/comentarios-post.component';
import { ComentarioComponent } from './components/comentario/comentario.component';


@NgModule({
  declarations: [
    TablePostComponent,
    ComentariosPostComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgsRevealModule
  ]
})
export class PostsModule { }
