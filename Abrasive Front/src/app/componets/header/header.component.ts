import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.headerArray();
    this.animation();
  }

  headerArray(): void {
    const str: string = 'ABRASIVE';
    const header__text: any = document.querySelector('.header-text');
    for (let i = 0; i < str.length; i++) {
      header__text.innerHTML +=
        '<span class="header-span">' + str[i] + '</span>';
    }
  }

  animation(): void {
    const arr = document.querySelectorAll('.header-span');
    function randNum() {
      return Math.floor(Math.random() * 100);
    }

    for (let i = 0; i < arr.length; i++) {
      setTimeout(function () {
        arr[i].classList.add('textAnimation');
      }, randNum() * 10);
    }
  }
}
