import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-en-savoir-plus',
  templateUrl: 'enSavoirPlus.page.html',
  styleUrls: ['enSavoirPlus.page.scss'],
})
export class EnSavoirPlusPage {
  public pictures = [
    {
      before: 'avant-toilettes-meuble.webp',
      after: 'apres-toilettes-meuble.webp',
    },
    { before: 'douche-avant.webp', after: 'douche-apres.webp' },
    {
      before: 'salon-kitchennette-avant.webp',
      after: 'salon-kitchennette-apres.webp',
    },
  ];
  constructor(private router: Router) {}
}
