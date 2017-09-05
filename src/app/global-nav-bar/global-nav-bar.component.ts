import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';


// надо подумать над поведением
// навбар полностью скрывается только на мобильных устройствах
// в других случаях он показывается в режиме только иконки или в полном размере
// дополнительно, есть два режима отображения содержимого

// для незалогиненных пользователей:
// для десктопа показывать только верхнее меню, боковое скрывать
// для мобильной версии- в верхнем меню показывать только кнопку открытия и логотип
// в боковом меню показывать содержимое верхнего

// для залогиненных пользователей
// в верхнем меню показвать логотип, поиск, данные текущего пользователя, кнопку выхода


// по умолчанию режим только иконки


@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.sass']
})
export class GlobalNavBarComponent implements OnInit, AfterViewInit {
  public state = '';
  sideMenuShow = true;
  sideNavIconsOnly = true;  // false- полный размер
  mobileSize = false;
  mode = 'side';

  sideNavLinks = [
    {title: 'Поиск', icon: 'search'},
    {title: 'alarm', icon: 'alarm'},
    {title: 'backup', icon: 'backup'},
    {title: 'code', icon: 'code'},
    {title: 'extension', icon: 'extension'},
    {title: 'grade', icon: 'grade'},
    {title: 'subject', icon: 'subject'},
    {title: 'warning', icon: 'warning'},
  ];


  constructor(public media: ObservableMedia) {
  }

  ngAfterViewInit() {
    this.media.asObservable()
      .subscribe((change) => {
        // this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        // console.log('this.state', change.mqAlias);
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          this.mobileSize = true;
          // this.sideNavIconsOnly = false;
          // this.sideMenuShow = false;
        } else {
          this.mobileSize = false;
        }
      });
  }

  ngOnInit() {

  }

  toggleMenu() {
    console.log('toggleMenu');


    if (this.mobileSize) {
      this.mode = 'over';
      if (this.sideMenuShow) {
        this.sideMenuShow = false;
      } else {
        this.sideMenuShow = true;
        this.sideNavIconsOnly = false;
      }
    } else {
      this.sideMenuShow = true;
      if (this.mode === 'side') {
        this.mode = 'over';
        this.sideNavIconsOnly = false;
      } else {
        this.mode = 'side';
        this.sideNavIconsOnly = true;
      }
    }

    /*if (this.sideMenuShow) {
      this.sideMenuShow = false;
    } else {
      this.sideMenuShow = true;
    }*/
  }

}
