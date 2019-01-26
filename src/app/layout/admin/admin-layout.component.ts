import { AuthenticationService } from './../../services/authentication.service';
import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('shw-rside', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('off', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('shw-rside => off', animate('400ms ease-in-out')),
      transition('off => shw-rside', animate('400ms ease-in-out'))
    ]),
    trigger('toggledMenu', [
      state('out, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('in',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('out <=> in', [
        animate('400ms ease-in-out')
      ])
    ]), trigger('toggledSubMenu', [
      state('off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('on',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('off <=> on', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class AdminLayoutComponent implements OnInit {
  public menuType: string;
  public headerType: string;
  public sidebarType: string;
  public themeType: string;
  public toggledArrow: string;
  public selected: any;
  public selectedSub: any;
  public windowHeight: number;
  public windowWidth: number;
  public settingToggle: string;

  constructor(public menuItems: MenuItems, public authService:AuthenticationService, private router:Router) {
    this.themeType = 'default';
    this.toggledArrow = 'icon-arrow-left-circle';
    this.settingToggle = 'off';
    this.windowHeight = window.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    }
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
    }
  }

  ngOnInit() {}

  onResize(event) {
    this.windowHeight = event.target.innerHeight - 60;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 1170) {
      this.menuType = 'mini-sidebar';
    } else {
      this.menuType = '';
    }

    if (this.windowWidth < 768) {
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'fa fa-bars' : 'icon-arrow-left-circle';
    }
  }

  onToggled() {
    if (this.windowWidth < 768) {
      this.selectedSub = 0;
      this.selected = 0;
      this.menuType = this.menuType === 'mini-sidebar show-sidebar' ? 'mini-sidebar' : 'mini-sidebar show-sidebar';
      this.toggledArrow = this.menuType === 'mini-sidebar show-sidebar' ? 'fa fa-close' : 'fa fa-bars';
    } else {
      this.selectedSub = 0;
      this.selected = 0;
      this.toggledArrow = this.menuType === 'mini-sidebar' ? 'icon-arrow-left-circle' : 'fa fa-bars';
      this.menuType = this.menuType === 'mini-sidebar' ? '' : 'mini-sidebar';
    }
  }

  toggleSetting() {
    this.settingToggle = this.settingToggle === 'shw-rside' ? 'off' : 'shw-rside';
  }

  changeHeader() {
    this.headerType = this.headerType === 'fix-header' ? '' : 'fix-header';
  }

  changeSidebar() {
    this.sidebarType = this.sidebarType === 'fix-sidebar' ? '' : 'fix-sidebar';
  }

  changeThemeType(themeColor: string) {
    this.themeType = themeColor;
  }

  onClickedOutside(e: Event) {
    if (this.windowWidth < 768) {
      this.toggledArrow = 'fa fa-bars';
      this.menuType = 'mini-sidebar';
    }
  }

  select(item) {
    this.selectedSub = 0;
    this.selected = (item !== this.selected) ? item : 0;
  }

  selectSub(item, main_item) {
    this.selectedSub = (item !== this.selectedSub) ? item : 0;
    this.selected = main_item;
  }
  logOut(){
    console.log('logout clicked')
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

}



