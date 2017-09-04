import {Component, OnInit} from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';


@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.sass']
})
export class GlobalNavBarComponent implements OnInit {
  public state = '';
  sideMenuShow = true;

  constructor(public media: ObservableMedia) {
  }

  ngOnInit() {
    this.media.asObservable()
      .subscribe((change) => {
        this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        console.log('this.state', this.state);
      });
  }

  toggleMenu() {
    console.log('toggleMenu');
    if (this.sideMenuShow) {
      this.sideMenuShow = false;
    } else {
      this.sideMenuShow = true;
    }
  }

}
