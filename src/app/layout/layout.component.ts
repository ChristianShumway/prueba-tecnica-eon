import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showLoad!: boolean

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        this.showLoad = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoad = false;
        window.scroll({ 
          top: 0, 
          // left: 0, 
          // behavior: 'smooth' 
        });
      }
    });
  }

}
