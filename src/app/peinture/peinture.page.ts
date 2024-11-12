import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { BleClient, numbersToDataView, numberToUUID, BluetoothLe } from '@capacitor-community/bluetooth-le'

//const HEART_RATE_SERVICE = numberToUUID(0x180d);
@Component({
  selector: 'app-elec',
  templateUrl: 'peinture.page.html',
  styleUrls: ['peinture.page.scss'],
})
export class PeinturePage {
  constructor(private router: Router) {}

  public goToMap() {
    this.router.navigate(['/app/tabs/map']);
  }
}
