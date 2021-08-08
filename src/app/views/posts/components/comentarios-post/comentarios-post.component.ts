import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { EnterTop, EnterRight, EnterBottom, EnterLeft, EnterNoMove,  } from './../../../../utils/animations-intro';

@Component({
  selector: 'app-comentarios-post',
  templateUrl: './comentarios-post.component.html',
  styleUrls: ['./comentarios-post.component.scss'],
  animations: [ EnterTop, EnterBottom, EnterLeft, EnterRight, EnterNoMove]
})

export class ComentariosPostComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<ComentariosPostComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
