import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss', '../home/home.component.scss']
})
export class DonationComponent {
  donationType: string = 'DONATION';
  details: string = "Details";
  image_first: string = "../../assets/img/donate-image.jpg";
  image_second: string = "../../assets/img/donate-image.jpg";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Using query parameters
    const value = this.route.snapshot.queryParamMap.get('sewa');

    if (value == "Annadan") {
      this.donationType = "ANNADAN";
      this.image_first = "../../assets/img/annadan-sewa-1.png";
      this.image_second = "../../assets/img/annadan-sewa-2.png";
    }
    else if (value == "cow") {
      this.donationType = "GO";
      this.image_first = "../../assets/img/go-sewa-1.png";
      this.image_second = "../../assets/img/go-sewa-2.png";
    }
    else if (value == "nitya") {
      this.donationType = "NITYA";
      this.image_first = "../../assets/img/nitya-sewa1.png";
      this.image_second = "../../assets/img/nitya-sewa-2.png";
    }
    else {
      this.donationType = "DONATION";
      this.image_first = "../../assets/img/donation-sewa-2.png";
      this.image_second = "../../assets/img/donate-image.jpg";
    }

    window.onscroll = function () {
      var scroll = window.scrollY;

      $('#scroll-animate-main').css({
        'top': scroll + 140 + 'px'
      });

      $('#footer').css({
        'top': -1300 + scroll + 'px'
      });
    }
  }
}
