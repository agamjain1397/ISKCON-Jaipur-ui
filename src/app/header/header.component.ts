import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  donate(valueToPass: any) {
    // Using query parameters
    this.router.navigate(['/donation'], { queryParams: { sewa: valueToPass } });
  }

}
