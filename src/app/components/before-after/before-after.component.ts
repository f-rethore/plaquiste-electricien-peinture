import { Component, Input } from '@angular/core';
//import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss'],
})
export class BeforeAfterComponent {
  @Input() public pictureBefore: string = '/';
  @Input() public pictureAfter: string = '/';
  @Input() public indice: number = 0;
  public range: HTMLInputElement | null = null;
  public imgContainer2: HTMLInputElement | null = null;
  public dragLine: HTMLInputElement | null = null;

  constructor() {}
  public valueChanged(event: any): void {
    var mainElement = document.querySelector(`#main${this.indice}`);
    if (mainElement) {
      this.range = mainElement.querySelector(`.disclosure__range`);
      this.imgContainer2 = mainElement.querySelector(
        `.disclosure__img-container--2`
      );
      this.dragLine = mainElement.querySelector(`.disclosure__line`);

      if (this.imgContainer2 && this.range) {
        this.imgContainer2.style.inlineSize = event.target.value + '%';
        //this.imgContainer2.style.left = -event.target.value + '%';
      }

      if (this.dragLine && this.range) {
        this.dragLine.style.left = event.target.value + '%';
      }
    }
  }
}
