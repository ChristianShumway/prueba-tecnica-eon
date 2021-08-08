import { Component, Input, OnInit } from '@angular/core';
import { ComentarioPost } from '@core/models/post';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {
  @Input() comentario!: ComentarioPost;

  constructor() { }

  ngOnInit(): void {
  }

}
