import { Injectable } from '@angular/core';
import { Nav } from './../../models/nav';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public appDrawer: any;

  navItems: Nav[] = [
    {
      displayName: 'Inicio',
      iconName: 'home',
      route: 'home',
      disabled: false
    },
    {
      displayName: 'Empresa',
      iconName: 'business',
      route: 'empresa',
      disabled: false
    },
    {
      displayName: 'Posts',
      iconName: 'markunread_mailbox',
      route: 'posts',
      disabled: false
    }
  ];

  public optionsMenu() {
    return this.navItems;
  }

  constructor() { }
}
