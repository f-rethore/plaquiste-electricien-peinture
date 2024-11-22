import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { BleClient, numbersToDataView, numberToUUID, BluetoothLe } from '@capacitor-community/bluetooth-le'

//const HEART_RATE_SERVICE = numberToUUID(0x180d);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  public goTo(speciality: string) {
    this.router.navigate([`/${speciality}`]);
  }
}
