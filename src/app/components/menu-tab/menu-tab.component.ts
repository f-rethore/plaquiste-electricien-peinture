import { Component, signal, WritableSignal, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss'],
})
export class MenuTabComponent implements OnInit {
  public pages = [
    'home',
    'platrerie',
    'electricite',
    'peinture',
    'en-savoir-plus',
    'contact',
  ];
  public pageActive: WritableSignal<string> = signal('');
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let categoryToShow = event.url.toString().substring(1);

        if (this.pages.includes(categoryToShow)) {
          this.pageActive.update((p) => (p = categoryToShow));
        } else {
          this.pageActive.update((p) => (p = 'home'));
        }
      }
    });
  }
  public goToPage(page: string): void {
    this.pageActive.update((p) => (p = page));
    this.router.navigate([`/${page}`]);
  }
}
