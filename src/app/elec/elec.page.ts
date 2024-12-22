import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elec',
  templateUrl: 'elec.page.html',
  styleUrls: ['elec.page.scss'],
})
export class ElecPage {
  public imagesToShow: string[] = [
    'elec-1',
    'elec-2',
    'elec-3',
    'elec-4',
    'elec-5',
  ];
  public imageIdToDisplay: WritableSignal<number> = signal(1);
  constructor(private router: Router) {}

  public goNext(pictureId: number) {
    if (pictureId === this.imagesToShow.length) {
      pictureId = 0;
    }
    const element = document.getElementById('elec-' + (pictureId + 1));
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
    const element = document.getElementById('elec-' + pictureId);
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
