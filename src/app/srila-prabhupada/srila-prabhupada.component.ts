import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-srila-prabhupada',
  templateUrl: './srila-prabhupada.component.html',
  styleUrls: ['./srila-prabhupada.component.scss', '../home/home.component.scss']
})
export class SrilaPrabhupadaComponent {

  ngOnInit() {
    window.onscroll = function () {
      var scroll = window.scrollY;

      $('#scroll-animate-main').css({
        'top': scroll + 140 + 'px'
      });

      $('#footer').css({
        'top': -4950 + scroll + 'px'
      });
    }
  }
}
