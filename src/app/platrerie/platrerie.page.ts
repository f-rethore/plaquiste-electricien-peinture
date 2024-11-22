import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
//import { BleClient, numbersToDataView, numberToUUID, BluetoothLe } from '@capacitor-community/bluetooth-le'

//const HEART_RATE_SERVICE = numberToUUID(0x180d);
@Component({
  selector: 'app-platrerie',
  templateUrl: 'platrerie.page.html',
  styleUrls: ['platrerie.page.scss'],
})
export class PlatreriePage {
  public imagesToShow: string[] = ['placo-1', 'placo-2', 'placo-3', 'placo-4'];
  public imageIdToDisplay: WritableSignal<number> = signal(1);
  constructor(private router: Router) {}

  public goToMap() {
    this.router.navigate(['/app/tabs/map']);
  }
  public goNext(pictureId: number) {
    if (pictureId === this.imagesToShow.length) {
      pictureId = 0;
    }
    const element = document.getElementById('placo-' + (pictureId + 1));
    console.log(pictureId);
    console.log('element', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
  public goPrevious(pictureId: number) {
    if (pictureId === 0) {
      pictureId = this.imagesToShow.length;
    }
    const element = document.getElementById('placo-' + pictureId);
    console.log(pictureId);
    console.log('element', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
}
