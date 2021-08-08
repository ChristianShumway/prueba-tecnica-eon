import { Component, OnInit } from '@angular/core';
import { EnterTop, EnterRight, EnterBottom, EnterLeft, EnterNoMove,  } from './../../../../utils/animations-intro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ EnterTop, EnterBottom, EnterLeft, EnterRight, EnterNoMove]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
