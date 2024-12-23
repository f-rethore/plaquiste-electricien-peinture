import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elec',
  templateUrl: 'peinture.page.html',
  styleUrls: ['peinture.page.scss'],
})
export class PeinturePage {
  public imagesToShow: string[] = ['peinture-1', 'peinture-2'];
  public imageIdToDisplay: WritableSignal<number> = signal(1);
  constructor(private router: Router) {}

  public goNext(pictureId: number) {
    if (pictureId === this.imagesToShow.length) {
      pictureId = 0;
    }
    const element = document.getElementById('peinture-' + (pictureId + 1));

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
    const element = document.getElementById('peinture-' + pictureId);
    if (element) {
      element.scrollIntoView({
        behavior: 'instant',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
  public goToPicture(pictureId: number) {
    this.router.navigate([`/peinture/peinture-${pictureId}`, {}]);
  }
}
