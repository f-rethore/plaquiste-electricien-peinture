import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-en-savoir-plus',
  templateUrl: 'enSavoirPlus.page.html',
  styleUrls: ['enSAvoirPlus.page.scss'],
})
export class EnSavoirPlusPage {
  constructor(private router: Router) {}

  public goToMap() {
    this.router.navigate(['/app/tabs/map']);
  }
}
