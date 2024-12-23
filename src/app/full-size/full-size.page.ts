import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-size',
  templateUrl: 'full-size.page.html',
  styleUrls: ['full-size.page.scss'],
})
export class FullSizePage implements OnInit {
  public eventImage: string = '';
  public category: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.router.url.split('/')[1].length > 0) {
      this.category = this.router.url.split('/')[1];
    }
    if (this.route.snapshot.paramMap.get('image') !== null) {
      this.eventImage = this.route?.snapshot?.paramMap.get('image') || '';
    }
  }

  public goBack(): void {
    this.router.navigate([`/${this.category}`]);
  }
  public async handleLoadingError(): Promise<void> {
    await this.router.navigate([`/home`]);
  }
}
