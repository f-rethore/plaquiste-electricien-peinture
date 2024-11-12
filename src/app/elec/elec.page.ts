import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { BleClient, numbersToDataView, numberToUUID, BluetoothLe } from '@capacitor-community/bluetooth-le'

//const HEART_RATE_SERVICE = numberToUUID(0x180d);
@Component({
  selector: 'app-elec',
  templateUrl: 'elec.page.html',
  styleUrls: ['elec.page.scss'],
})
export class ElecPage {
  constructor(private router: Router) {}

  public goToMap() {
    this.router.navigate(['/app/tabs/map']);
  }
}
