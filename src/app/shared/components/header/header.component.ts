import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavService } from '@core/services/nav/nav.service';
import { Nav } from '@core/models/nav';
import { EnterTop, EnterRight, EnterBottom, EnterLeft, EnterNoMove,  } from './../../../utils/animations-intro';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ EnterTop, EnterBottom, EnterLeft, EnterRight, EnterNoMove]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  optionsMenu: Nav[] = [];
  changeSideNav: boolean = false;
  @ViewChild('drawer', {static: false}) public appDrawer!: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event: any){
    let scroll = $event.path[1].scrollY; 
    console.log(scroll);
    scroll > 40 ? this.changeSideNav = true : this.changeSideNav = false;
  }

  ngAfterViewInit() {
    // this.navService.appDrawer = this.appDrawer;
  }

  getMenu(){
    this.optionsMenu = this.navService.optionsMenu();
  }

}
